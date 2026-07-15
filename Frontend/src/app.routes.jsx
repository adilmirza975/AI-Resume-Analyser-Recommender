import {createBrowserRouter} from "react-router"
// import { create } from "../../backend/src/models/user.model"
import Register from "./features/auth/pages/Register"
import Login from "./features/auth/pages/Login"
import Protected from "./features/auth/components/Protected"

export const router = createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },

  // create a protected layer that hepls to protect the home page access from unauthorised user/access
  {
    path:"/",
    element:<Protected><h1>Home Page</h1></Protected>
  }
])