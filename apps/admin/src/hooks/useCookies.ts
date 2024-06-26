import { deleteCookie, getCookie, setCookie as storeCookie } from '@/utils'
import { useState } from 'react'

export const useCookies = (cname: string) => {
  const [cvalue, setCvalue] = useState(() => {
    try {
      const value = getCookie(cname)
      return value
    } catch (error) {
      console.error(error)
      return null
    }
  })

  const setCookie = (cvalue: string, exdays: number) => {
    try {
      storeCookie(cname, cvalue, exdays)
      setCvalue(cvalue)
    } catch (error) {
      console.error(error)
    }
  }
  const removeCookie = () => {
    try {
      deleteCookie(cname)
      setCvalue(null)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    cvalue,
    setCookie,
    removeCookie
  }
}
