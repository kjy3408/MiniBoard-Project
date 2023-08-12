/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import * as s from './RegisterStyle';

const Register = () => {
    const [ registerUser, setRegisterUser ] = useState({username: "", password: "", checkPassword: "", nickname: "", questionId: "", answer: ""})
    const [ errorMessages, setErrorMessages ] = useState({username: "", password: "", checkPassword: "", nickname: "", questionId: "", answer: ""});
    const [ userInfoQuestionOpenFlag, setUserInfoQuestionOpenFlag ] = useState(false); 
    const [ getQuestionCategoryFlag, setGetQuestionCategoryFlag ] = useState(true);
    const [ questionButtonCheckFlag, setQuestionButtonCheckFlag ] = useState(false);
    
    const onChangeInputHandle = (e) => {
        const { name, value } = e.target;
        setRegisterUser({...registerUser, [name]: value});
        console.log(registerUser)
    }

    const getQuestionCategory = useQuery(["getQuestionCategory"], async() => {
        
        const response = await axios.get("http://localhost:8080/auth/register/category")
        console.log(response)
        return response;
    }, {
        enabled: getQuestionCategoryFlag,
        onSuccess: () => {
            setGetQuestionCategoryFlag(false)
        }
    })
    
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
            console.log(error.response.data)
            setErrorMessages({username: "", password: "", checkPassword: "", nickname: "", questionId:"", answer: "", ...error.response.data.errorData});
            setQuestionButtonCheckFlag(true);
            if(error.response.data.errorData.password){
                
            }
        }
    }

    const onClickLoginButton = () => {
        
        window.location.replace("http://localhost:3000/auth/login")
    }

    const questionOnClickHandle = () => {
        setUserInfoQuestionOpenFlag(!userInfoQuestionOpenFlag);
    }
    return (
        <>
        <div css={s.registerContainer}>
            <h1 css={s.registerTitleBox}>회원가입</h1>

            <main css={s.mainContainer}>
                {/* <label css={s.registerLabel}>아이디</label> */}
                <input css={s.registerInput} type="text" onChange={onChangeInputHandle} name="username" placeholder="아이디를 입력하세요"/>
                <div css={s.errorMessage}>{errorMessages.username}</div>

                {/* <label css={s.registerLabel}>비밀번호</label> */}
                <input css={s.registerInput} type="password" onChange={onChangeInputHandle} name="password" placeholder="비밀번호를 입력하세요"/>
                <div css={s.errorMessage}>{errorMessages.password}</div>

                {/* <label css={s.registerLabel}>비밀번호 확인</label> */}
                <input css={s.registerInput} type="password" onChange={onChangeInputHandle} name="checkPassword" placeholder="비밀번호를 확인하세요"/>
                <div css={s.errorMessage}>{errorMessages.password}</div>

                {/* <label css={s.registerLabel}>닉네임</label> */}
                <input css={s.registerInput} type="text" onChange={onChangeInputHandle} name="nickname" placeholder="닉네임을 입력하세요."/>
                <div css={s.errorMessage}>{errorMessages.nickname}</div>
                
                <label css={s.registerLabel}>아이디/비밀번호 찾기 질문 선택<label css={s.IdAndPasswordLabel}>(필수)</label></label>
                <button css={s.questionSelectButton(questionButtonCheckFlag)} onClick={questionOnClickHandle}>질문선택</button>
                {userInfoQuestionOpenFlag ? 
                    (
                        <div>    
                            {getQuestionCategory.isLoading ? "" 
                            : getQuestionCategory.data !== undefined ? 
                            (<div css={s.questionBox}>
                                <label css={s.questionErrorMessage}>
                                    {errorMessages.questionId}
                                </label>
                                {getQuestionCategory.data.data.map(question => (
                                    <ul css={s.questionUi} key={question.questionId}>
                                        <li>
                                            <input onChange={(e) => onChangeInputHandle(e, question.questionId)} 
                                                type="radio" 
                                                name='questionId'
                                                id={question.questionId} 
                                                value={question.questionId}
                                            />
                                            <label css={s.categoryLabel} htmlFor={question.questionId} >{question.question}</label>
                                        </li>
                                    </ul>
                                ))}
                                <div css={s.answerBox}>
                                    <label css={s.answerErrorMessage} >
                                        {errorMessages.answer}    
                                    </label>
                                    <input css={s.answerInput}
                                        type="text" 
                                        placeholder='답변을 입력하세요.'
                                        name='answer'
                                        onChange={onChangeInputHandle}/>    
                                </div>
                            </div>) : ""}
                        </div>
                    ) : ""}
            </main>
            <footer >
                <button css={s.registerAndLoginButton} onClick={submitRegisterHandle}>회원가입</button>
                <button css={s.registerAndLoginButton} onClick={onClickLoginButton}>로그인</button>
            </footer>
        </div>
        </>
    );
};

export default Register;