import cookie from "cookie"

export default async function profile(req,res) {
    try {
        const cookies = cookie.parse(req.headers.cookie ?? "") 
        const access_token = cookies["access_token"]
        
        const response =  await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{
            headers:{
                "Authorization":`Bearer ${access_token}`
            }
        })
        const userInfo = await response.json()
        if (response.status != 200) {
            throw userInfo
        }
        return res.status(200).json(userInfo)
    } catch (error) {
        console.error(error);
        return res.status(400).json({
            message:"something went wrong"
        })
    }
}