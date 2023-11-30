import React, { useEffect} from "react";
import './styles/App.css'
import { Navbar } from "./components/UI/navbar/Navbar";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { setIsAuth, setIsLoading } from "./store/reducers/AuthSlice";
import {Error} from "./pages/Error";
import { About } from "./pages/About";
import { PostIdPage } from "./pages/PostIdPage";


const router = (isAuth: boolean) => createBrowserRouter([
  isAuth ?
  {
    path: '/',
    element: <Navbar/>,
    errorElement: <Error/>,
    children: [
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'posts/:id',
        element: <PostIdPage/>,
      },
    ]
  } : 
  {
    path: '/login',
    element: <PostIdPage/>,
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
    

      <RouterProvider router={router(isAuth)}/>

  )
}

