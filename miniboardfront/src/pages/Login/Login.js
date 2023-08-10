/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import AuthInput from '../../components/AuthInput/AuthInput';
import * as s from './LoginStyle';
import { useMutation } from 'react-query';

const Login = () => {

    const [ loginUser, setLoginUser ] = useState({username: "", password: ""});
    const [ errorMessages, setErrorMessages ] = useState({username:"", password:""})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    }

    const registerButtonHandle = () => {
        window.location.href = "http://localhost:3000/auth/register"
    }

    const loginHandleSubmit = useMutation(async () => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const response = await axios.post("http://localhost:8080/auth/login", JSON.stringify(loginUser), option);
            localStorage.setItem("accessToken", response.data);
            alert("로그인성공")
            window.location.replace("http://localhost:3000/auth/home")
        }catch(error) {
            setErrorMessages({username: "", password: "", ...error.response.data.errorData});
        }
    })

    const loginButtonHandle = () => {
        loginHandleSubmit.mutate();
    }
    const loginEnterKeyup = (e) => {
        if(e.keyCode === 13) {
            loginHandleSubmit.mutate();
        }
    }

    return (
        <div onKeyUp={loginEnterKeyup} css={s.loginContainer}>
            <header css={s.headerBox}>
                <h1 css={s.loginTitle}>로그인</h1>
            </header>
            <main css={s.mainContainer}>
                <input css={s.loginInput} type="username" onChange={handleChange} name="username" placeholder="아이디를 입력하세요"/>
                <div css={s.usernameErrorMessage}>{errorMessages.username}</div>
                <input css={s.loginInput} type="password" onChange={handleChange} name="password" placeholder="비밀번호를 입력하세요"/>
                <div css={s.passwordErrorMessage}>{errorMessages.password}</div>
                <button css={s.loginButton} onClick={loginButtonHandle}>로그인</button>
                <div css={s.findIdAndPasswordContainer}>
                    <div css={s.registerBox}>
                        <button css={s.registerButton} onClick={registerButtonHandle}>회원가입</button>
                    </div>
                    <div css={s.findIdAndPasswordBox}>
                        <button css={s.findIdAndPasswordButton}>아이디/비밀번호 찾기</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;