import { Navigate, Route, Routes } from "react-router-dom"
import { About } from "../pages/About"
import Posts from "../pages/Posts"
import Error from "../pages/Error"
import { PostIdPage } from "../pages/PostIdPage"
import { publicRoutes, privateRoutes} from "../router/routes"
import { useContext } from "react"
import { AuthContext } from "./context/context"
import { Loader } from "./UI/loader/Loader"

export const AppRouter = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)
    
    if (isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ? 
            <Routes>
            {privateRoutes.map(route =>
                <Route 
                    path={route.path} 
                    Component={route.element} 
                    exact={route.exact}
                    key={route.path}
                />
            )}  
            
            <Route path="/*" element={<Navigate to='/posts' replace/>}/>  
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route 
                        path={route.path} 
                        Component={route.element} 
                        exact={route.exact}
                        key={route.path}
                    />
                )}  
                <Route path="/*" element={<Navigate to='/login' replace/>}/>  
            </Routes>
        

    )
}