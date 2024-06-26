export interface MessageResponse {
  results: Result[]
  info: Info
}

export interface Info {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface Result {
  id: number
  email: string
  organization: string
  message: string
  createdAt: string
}
