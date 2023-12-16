import { Link, Outlet } from "react-router-dom"
import classes from "./Navbar.module.css"
import {MyButton} from "../button/MyButton"
import { useAppDispatch} from "../../../hooks/redux"
import { setIsAuth } from "../../../store/reducers/AuthSlice"



export const Navbar:  React.FC = () => {
    const dispatch = useAppDispatch()
    const logout = () => {
        dispatch(setIsAuth(false))
        localStorage.removeItem('auth')
    }
    return (
        <>
        <div className={classes.navbar}>
            <MyButton onClick={() => logout()}>
                Выйти
            </MyButton>
            <div className={classes.navbar__links}>
                <Link to='/about'>О сайте</Link>
                <Link to="/">Посты</Link>
            </div>
        </div>
        <Outlet/>
        </>
    )
}