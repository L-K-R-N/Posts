import { useContext } from "react";
import {MyButton} from "../components/UI/button/MyButton";
import {MyInput} from "../components/UI/input/MyInput";
import { AuthContext } from "../components/context/context";
export const Login: React.FC = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = (e: React.FormEvent) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', isAuth)
    }
    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

