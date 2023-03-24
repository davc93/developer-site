import { decodeToken } from "../jwt.js";

export async function checkAuth(req, res, next) {
  try {
    const authorization = req.headers.authorization
    const result = await decodeToken(authorization)
    req.user = result.payload
    next()
  } catch (error) {
    next(error);
  }
}
