import { createContext } from "react";

export const AuthContext = createContext<{token:string | null,setToken:any,deleteToken:any}>({token:null,setToken:null,deleteToken:null})