const env = process.env.RAILWAY_ENVIRONMENT_NAME ?? "local";
const envs = {
  local: ".env",
  dev: ".env.dev",
  production: ".env.production",
};

const options = {};
if (envs[env]) {
  options.path = envs[env];
}

require("dotenv").config(options);

const config = {
  isProd:process.env.ENVIRONMENT == "production" ? true : false,
  dbUrl: process.env.DATABASE_URL,
  port: process.env.PORT ?? 3000,
  jwtSecret: process.env.JWT_SECRET,
  refreshSecret: process.env.JWT_SECRET,
  cloudinaryUrl: process.env.CLOUDINARY_URL,
  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD,
};

console.log("[project-config]:", config);
module.exports = {
  config,
};
