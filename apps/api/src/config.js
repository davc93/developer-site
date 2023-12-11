
const config = {
  env:process.env.NODE_ENV,
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
