import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import HomeRoute from './routes/HomeRoute.tsx'
import { HOME, SIGN_IN } from './constants/routeNames.tsx'
import SigninRoute from './routes/SigninRoute.tsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME} element={<App/>}>
    <Route index={true} path={HOME} element={<HomeRoute/>}></Route>
    <Route path={SIGN_IN} element={<SigninRoute/>}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)