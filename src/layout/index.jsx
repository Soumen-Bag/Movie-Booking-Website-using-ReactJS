import { ToastContainer } from "react-toastify";

export function Main(children){
  return(
    <>
    {children}
    <ToastContainer/>
    </>
  )
}

