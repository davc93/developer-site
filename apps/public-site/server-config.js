import dotenv from "dotenv"
dotenv.config()

export const config = {
    isProd:process.env.ENVIRONMENT == "production" ? true : false,
    mongoDB:process.env.MONGO_DB,
    postgresDB:process.env.POSTGRES_DB,
    smtpEmail:process.env.SMTP_EMAIL,
    smtpPassword:process.env.SMTP_PASSWORD,
    clientId:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    baseUrlPath: process.env.BASE_URL_PATH || `https://${process.env.VERCEL_BRANCH_URL}`
}