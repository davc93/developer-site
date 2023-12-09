import Buffer from "node:buffer";
import querystring from "node:querystring";
import jwt from "jsonwebtoken";
import { config } from "../../server-config.js";
import { sequelize, User } from "../lib/sequelize/sequelize.js";

export default async function handler(req, res) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // "Authorization": `Basic ${clientAuth}`,
      },
      body: querystring.stringify({
        code: req.query.code,
        client_id: config.clientId,
        client_secret: config.clientSecret,
        redirect_uri: `${config.baseUrlPath}/api/auth/callback`,
        grant_type: "authorization_code",
      }),
    };
    const response = await fetch(
      "https://oauth2.googleapis.com/token",
      options
    );
    const data = await response.json();
    const decoded = jwt.decode(data.id_token);
    await sequelize.authenticate();

    await User.sync();

    const newUser = User.build({
      name: decoded.name,
      email: decoded.email,
      sub: decoded.sub,
    });
    await newUser.save();
    await sequelize.close();

    res.setHeader("Set-Cookie", `access_token=${data.access_token}; Path=/;`);
    res.writeHead(302, { location: "/profile" });
    res.end();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "something went wrong",
    });
  }
}
