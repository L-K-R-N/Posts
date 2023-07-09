import { Link } from "react-router-dom"
import classes from "./Navbar.module.css"
import MyButton from "../button/MyButton"
import { useContext } from "react"
import { AuthContext } from "../../context/context"

export const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={classes.navbar}>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className={classes.navbar__links}>
                <Link to='/about'>О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </div>
    )
}