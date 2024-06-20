export function shuffleArray (array: any[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) // Generate a random index between 0 and i
    ;[array[i], array[j]] = [array[j], array[i]] // Swap elements at i and j
  }
}
export function deleteCookie (cookieName: string): void {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/;`
}
