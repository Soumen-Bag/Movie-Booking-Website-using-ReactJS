import React from 'react'
import { isLogin } from '../api'
import { Navigate } from 'react-router'

const ProtectedRouting = ({children}) => {
  if(isLogin()){
    console.log(children)
    return children
  }else{
    return <Navigate to='/login' />
  }
}

export default ProtectedRouting