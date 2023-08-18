/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import * as s from './FindUserInfoStyle';


const FindUsername = () => {
    const [ findUsernameData, setFindUsernameData ] = useState({nickname:"", questionId: "", findUsernameAnswer: ""})
    const [ errorMessage, setErrorMessage ] = useState({nickname:"", questionId: "", findUsernameAnswer: ""}) 
    const [ notFoundUsername, setNotFoundUsername ] = useState({notFoundUsername: ""});
    const [ getQuestionCategoryFlag, setGetQuestionCategoryFlag ] = useState(true)
    const [ findUsernameFlag, setFindUsernameFlag ] = useState(false);

    const onChangeFindUsernameInputHandle = (e) => {
        const { name, value } = e.target;
        setFindUsernameData({...findUsernameData, [name]: value});
    }

    const getQuestionCategory = useQuery(["getQuestionCategory"], async() => {
        
        const response = await axios.get("http://localhost:8080/auth/register/category")
        
        return response;
    }, {
        enabled: getQuestionCategoryFlag,
        onSuccess: () => {
            setGetQuestionCategoryFlag(false)
        }
    })

    const findUsername = useQuery(["findUsername"], async() => {
        const option = {
            params: {
                ...findUsernameData
            }
        }
        try{
            const response = await axios.get("http://localhost:8080/auth/find/username", option)
            setErrorMessage({nickname:"", questionId: "", findUsernameAnswer: ""})
            return response;
        }catch(error){
            console.log(error.response.data.errorData)
            setErrorMessage({nickname:"", questionId: "", findUsernameAnswer: "", notFouneUsername: "", ...error.response.data.errorData})
            setNotFoundUsername({notFoundUsername: "", ...error.response.data.errorData})
        }

        
    },{
        enabled: findUsernameFlag,
        onSuccess: () => {
            setFindUsernameFlag(false);
        }
    })

    const findUsernameOnclickHandle = () => {
        setFindUsernameFlag(true);
    }
    
    const findPasswordButtonHandle = () => {
        window.location.href = "http://localhost:3000/auth/find/password"
    }

    return (
        <div css={s.findUserInfoContainer}>   
            <div css={s.findUsernameBox}>
                <div css={s.findUsernameTitleBox}>
                    ID 찾기
                </div>
                <div css={s.usernameInputBox}>
                    <input css={s.usernameInput} 
                            type="text"
                            placeholder='닉네임을 입력하세요.' 
                            name='nickname'
                            onChange={onChangeFindUsernameInputHandle}/>
                </div>
                <div css={s.errorMessageBox}>
                    <label css={s.errorMessage}>
                        {errorMessage.nickname}
                    </label>
                </div>
                <div css={s.questionBox}>
                    {getQuestionCategory.isLoading ? "" : 
                        getQuestionCategory.data !== undefined ?  (
                            getQuestionCategory.data.data.map(question => (
                                <ul css={s.questionUl} key={question.questionId}>
                                    <li>
                                        <input onChange={(e) => onChangeFindUsernameInputHandle(e, question.questionId)} 
                                                    type="radio" 
                                                    name='questionId'
                                                    id={question.questionId} 
                                                    value={question.questionId}
                                                />
                                        <label  htmlFor={question.questionId} >{question.question}</label>
                                    </li>
                                </ul>
                            ))
                            ) : ""}
                            <div css={s.errorMessageBox}>
                                <label css={s.errorMessage}>
                                    {errorMessage.questionId}
                                </label>
                            </div>
                </div>
                <div css={s.findUsernameAnswerBox}>
                    <input css={s.answerInput} 
                            type="text" 
                            placeholder='질문에 대한 답을 작성하세요.' 
                            onChange={onChangeFindUsernameInputHandle} name="findUsernameAnswer"/>
                    <button css={s.findUsernameButton} onClick={findUsernameOnclickHandle}>찾기</button>
                </div>
                <div css={s.errorMessageBox}>
                    <label css={s.errorMessage}>
                        {errorMessage.findUsernameAnswer}
                    </label>
                </div>
                <div css={s.usernameResultBox}>
                    {findUsername.isLoading ? "" :
                            findUsername.data !== undefined ?
                            (
                            <div css={s.resultBox}>
                                {findUsername.data.data}
                            </div>
                            ) : (<div css={s.errorMessage}>{notFoundUsername.notFoundUsername}</div>)}
                </div>
                <div css={s.findPasswordButtonBox}>
                    <button css={s.findPasswordButton} onClick={findPasswordButtonHandle}>
                        비밀번호 찾기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FindUsername;