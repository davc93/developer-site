class AuthService {
    async loginWithGoogle() {
        const response =  await fetch("/api/auth/login",{
          redirect:"follow",
        })
        console.log(response);
        
        const data = await response.json()
        return data
    }
    async signUpWithEmailAndPassword() {
        
    }
    async loginWithEmailAndPassword() {
        
    }
    async  getUserInfo() {
      const response = await fetch("/api/profile")
      const data = await response.json()
      
      if(!response.ok){
        throw data
      }

      return data
    }
}


export const authService = new AuthService()