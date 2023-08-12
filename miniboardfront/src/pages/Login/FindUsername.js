/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './FindUserInfoStyle';
import { useQuery } from 'react-query';
import axios from 'axios';


const FindUsername = () => {
    const [ findUsernameData, setFindUsernameData ] = useState({nickname:"", questionId: "", findUsernameAnswer: ""})
    const [ errorMessage, setErrorMessage ] = useState({nickname:"", questionId: "", findUsernameAnswer: ""}); 
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
            // console.log(response === 400)
            if(response.data === ""){
                setErrorMessage("닉네임 또는 질문과 답을 다시 확인하세요.")
            }
            return response;
        }catch(error){
            setErrorMessage({nickname:"", questionId: "", findUsernameAnswer: "", ...error.response.data.errorData})
            console.log(error.response.data.errorData)
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
                    {errorMessage.questionId}
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
                    {errorMessage.nickname}
                </div>
                <div css={s.findUsernameAnswerBox}>
                    <input css={s.answerInput} 
                            type="text" 
                            placeholder='질문에 대한 답을 작성하세요.' 
                            onChange={onChangeFindUsernameInputHandle} name="findUsernameAnswer"/>
                    {errorMessage.findUsernameAnswer}
                    <button onClick={findUsernameOnclickHandle}>찾기</button>
                </div>
                {findUsername.isLoading ? "" :
                        findUsername.data !== undefined ?
                        (
                        <div css={s.resultBox}>
                            {findUsername.data.data}
                        </div>
                        ) : ""}

                <button onClick={findPasswordButtonHandle}>
                    비밀번호 찾기
                </button>
            </div>
        </div>
    );
};

export default FindUsername;