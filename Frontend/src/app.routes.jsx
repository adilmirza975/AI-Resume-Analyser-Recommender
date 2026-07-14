import {createBrowserRouter} from "react-router"
// import { create } from "../../backend/src/models/user.model"
import Register from "./features/auth/pages/Register"
import Login from "./features/auth/pages/Login"

export const router = createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }
])