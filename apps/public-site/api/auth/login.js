import { config } from "../../server-config.js"

export default async function login(req,res) {
    try {
        
        res.writeHead(302,{"location":`https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.clientId}&redirect_uri=http://localhost:3000/api/auth/callback&response_type=code&scope=openid%20profile%20email`})
        res.end()
    } catch (error) {
        return res.status(400).json({message:"Something went wrong"})
        
    }
}