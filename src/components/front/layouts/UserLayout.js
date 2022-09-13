import { Outlet } from "react-router-dom"
import Header from "../header/Header"

const UserLayout = ({children, cartItems}) => {
  return (
    <div>
        <Header cartItems={cartItems}/>
    </div>
  )
}

export default UserLayout
