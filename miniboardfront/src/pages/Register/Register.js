/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import AuthInput from '../../components/AuthInput/AuthInput';
import * as s from './RegisterStyle'

const Register = () => {
    const [ registerUser, setRegisterUser ] = useState({username: "", password: "", checkPassword: "", nickname: ""})
    const [ errorMessages, setErrorMessages ] = useState({username: "", password: "", checkPassword: "", nickname: ""});
    const onChangeInputHandle = (e) => {
        const { name, value } = e.target;
        setRegisterUser({...registerUser, [name]: value});
    }

    const submitRegisterHandle = async () => {
        const data = {
            ...registerUser
        }
        const option = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            await axios.post("http://localhost:8080/auth/signup", JSON.stringify(data), option);
            alert("회원가입 완료!")
            window.location.replace("http://localhost:3000/auth/login")
        } catch(error) {
            console.log(error)
            setErrorMessages({username: "", password: "", checkPassword: "", nickname: "", ...error.response.data.errorData});
        }
    }

    const onClickLoginButton = () => {
        
        window.location.replace("http://localhost:3000/auth/login")
    }

    return (
        <>
        <div>
            <h1>회원가입</h1>

            <main >
                <label >아이디</label>
                <AuthInput type="text" onChange={onChangeInputHandle} name="username" placeholder="아이디를 입력하세요"/>
                <div css={s.errorMessage}>{errorMessages.username}</div>

                <label >비밀번호</label>
                <AuthInput type="password" onChange={onChangeInputHandle} name="password" placeholder="비밀번호를 입력하세요"/>
                <div css={s.errorMessage}>{errorMessages.password}</div>

                <label >비밀번호 확인</label>
                <AuthInput type="password" onChange={onChangeInputHandle} name="checkPassword" placeholder="비밀번호를 확인하세요"/>
                <div css={s.errorMessage}>{errorMessages.password}</div>

                <label >닉네임</label>
                <AuthInput type="text" onChange={onChangeInputHandle} name="nickname" placeholder="닉네임을 입력하세요."/>
                <div css={s.errorMessage}>{errorMessages.nickname}</div>
            </main>

            <footer >
                <button  onClick={submitRegisterHandle}>회원가입</button>
                <button  onClick={onClickLoginButton}>로그인</button>
            </footer>
        </div>
        </>
    );
};

export default Register;