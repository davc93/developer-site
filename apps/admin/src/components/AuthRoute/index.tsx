import React, { useContext, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'


export const AuthRoute = ({ children }:{children:ReactNode} ):JSX.Element => {
  const { token } = useContext(AuthContext)
  
  if (token) {

    return <>{children}</>
  } else {
    return <Navigate to={'/login'}/>
  }
}
