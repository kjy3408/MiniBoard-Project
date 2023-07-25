import axios from 'axios';
import React, { useState } from 'react';
import AuthInput from '../../components/AuthInput/AuthInput';

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

    const loginHandleSubmit = async () => {
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            console.log(loginUser)
            const response = await axios.post("http://localhost:8080/auth/login", JSON.stringify(loginUser), option);
            localStorage.setItem("accessToken", response.data);
            alert("로그인성공")
            window.location.replace("http://localhost:3000/auth/home")

        } catch(error) {
            setErrorMessages({username: "", password: "", ...error.response.data.errorData});
        }
    }
    
    const loginEnterKeyup = (e) => {
        if(e.keyCode === 13) {
            loginHandleSubmit();
        }
    }

    return (
        <div onKeyUp={loginEnterKeyup}>
            <h1>로그인</h1>
            <main >
                <label >Username</label>
                <AuthInput type="username" onChange={handleChange} name="username" />
                <div >{errorMessages.username}</div>

                <label >Password</label>
                <AuthInput type="password" onChange={handleChange} name="password" />
            </main>
            <div>
                <button onClick={registerButtonHandle}>회원가입</button>
                <button onClick={loginHandleSubmit}>로그인</button>
            </div>
        </div>
    );
};

export default Login;