class AuthService {
  async loginWithGoogle (): Promise<unknown> {
    const response = await fetch('/api/auth/login', {
      redirect: 'follow'
    })
    console.log(response)

    const data = await response.json()
    return data
  }

  async getUserInfo (): Promise<unknown> {
    const response = await fetch('/api/profile')
    const data = await response.json()

    if (!response.ok) {
      throw data
    }

    return data
  }
}

export const authService = new AuthService()
