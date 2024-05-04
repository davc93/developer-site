// Singleton pattern
// Queremos asegurar el accesso a un recurso compartido en diferentes partes de la app
// Asegurar que la modificacion al recurso compartido se lleve a cabo en un solo punto de acceso

// ejercicio, implementar singleton para compartir el estado del usuario a lo largo de la app
// informacion a guardar
// interface PersonalInfo {
//   name: string
//   email: string
//   avatar: ''
// }
// interface AppInfo {
//   ad: string
//   sessionId: string
//   notifications: string[]
// }

// export class UserProvider {
//   static instance: UserProvider
//   private personalInfo: PersonalInfo
//   private appInfo: AppInfo

//   private constructor () {
//     this.personalInfo = {
//       name: '',
//       email: '',
//       avatar: ''
//     }

//     this.appInfo = {
//       ad: '',
//       sessionId: '',
//       notifications: []
//     }
//   }

//   static getInstance () {
//     // si tiene instancia creada, devuelva la instancia
//     if (!UserProvider.instance) {
//       UserProvider.instance = new UserProvider()
//     }
//     return UserProvider.instance
//     // si no, crea un nuevo singleton
//   }

//   getItem (key: string) {
//     return localStorage.getItem(key)
//   }

//   generateSessionId () {
//     // call to server to return cookie
//     this.appInfo
//   }

//   getGoogleProfile () {
//     // llama a google y guarda la informacion aqui
//     this.personalInfo
//   }
// }
