import React, { useEffect} from "react";
import './styles/App.css'
import { Navbar } from "./components/UI/navbar/Navbar";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { setIsAuth, setIsLoading } from "./store/reducers/AuthSlice";
import {Error} from "./pages/Error";
import { About } from "./pages/About";
import { PostIdPage } from "./pages/PostIdPage";
import { Posts } from "./pages/Posts";
import { Login } from "./pages/Login";

const authRouter = createBrowserRouter(
 [
 
  {
    path: '/',
    element: <Navbar/>,
    errorElement: <Posts/>,
    children: [
      {
        path: '',
        element: <Posts/>
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'posts/:id',
        element: <PostIdPage/>,
      },
    ]
  }]
  )
const unauthRouter = createBrowserRouter([ 
    {
      path: '/',
      element: <Login/>,
      errorElement: <Login/>,
    },
  ])

export function App() {
    const dispatch = useAppDispatch();
    const {isAuth} = useAppSelector(state => state.AuthReducer)
    useEffect(() => {
      if (localStorage.getItem('auth')) {
        dispatch(setIsAuth(false))
      }
      dispatch(setIsLoading(false))
    }, [])
  return (
    

      <RouterProvider router={isAuth ? authRouter : unauthRouter}/>

  )
}

