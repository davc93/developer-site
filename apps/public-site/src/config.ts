export const config = {
  apiUrl: import.meta.env.VITE_API_URI as string
}

console.log(config.apiUrl)
