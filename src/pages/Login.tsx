import { useEffect } from "react";
import {MyButton} from "../components/UI/button/MyButton";
import {MyInput} from "../components/UI/input/MyInput";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setIsAuth } from "../store/reducers/AuthSlice";
export const Login: React.FC = () => {
    const {isAuth} = useAppSelector(state => state.AuthReducer)
    const dispatch = useAppDispatch()
    const login = (e: React.FormEvent) => {
        e.preventDefault()
        dispatch(setIsAuth(true))
    }
    useEffect(() => {
        console.log(1)
        localStorage.setItem('auth', JSON.stringify(isAuth))
        
    }, [isAuth])
    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={(e) => login(e)}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton >Войти</MyButton>
            </form>
        </div>
    )
}

