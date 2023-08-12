/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import * as s from './FindUserInfoStyle';
import { useMutation, useQuery } from 'react-query';

const FindPassword = () => {

    const [ findPasswordData, setFindPasswordData ] = useState({username:"", questionId: "", findPasswordAnswer: ""})
    const [ getQuestionCategoryFlag, setGetQuestionCategoryFlag ] = useState(true)
    // const [ errorMessage, setErrorMessage ] = useState(""); 
    const [ findPasswordFlag, setFindPasswordFlag ] = useState(false);
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ password, setPassword ] = useState({userId: "", newPassword: "", checkPassword: ""});
    const [ errorMessages, setErrorMessages ] = useState({newPassword: "", checkPassword: ""})
    const [ buttonOpen, setButtonOpen ] = useState(false); 
    const [ userId, setUserId ] = useState({userId: ""})

    const onChangeFindPasswordInputHandle = (e) => {
        const { name, value } = e.target;
        setFindPasswordData({...findPasswordData, [name]: value});
        console.log(findPasswordData)
    }

    const changePasswordOnChangeHandle = (e) => {
        const { name, value } = e.target;
        setPassword({...password, [name]: value, userId: userId});
        console.log(password)
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

    const findPassword = useQuery(["findPassword"], async() => {
        const option = {
            params: {
                ...findPasswordData
            }
        }

        const response = await axios.get("http://localhost:8080/auth/find/password", option)
        console.log(response.data.userId)
        if(response.data.userId !== undefined){
            setButtonOpen(true);
            setUserId(response.data.userId)
            // return response;
        }
    },{
        enabled: findPasswordFlag,
        onSuccess: () => {
            setFindPasswordFlag(false);
        }
    })

    const changePassword = useMutation(async() => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type" : "application/json"
            }
        }
        const data = {
            userId: userId,
            newPassword: password.newPassword,
            checkPassword: password.checkPassword
        }
        try{
            await axios.put("http://localhost:8080/auth/find/updatepassword",JSON.stringify(data), option)
            alert("비밀번호 변경 완료")
            localStorage.removeItem("accessToken")
            window.location.replace("http://localhost:3000/auth/login")
            setModalOpen(false);
        }catch(error){
            console.log(error.response.data.errorData)
        }
    })

    const findPasswordButtonHandle = () => {
        setFindPasswordFlag(true);
    }


    const findUsernameButtonHandle = () => {
        window.location.href = "http://localhost:3000/auth/find/username"
    }

    const changePasswordModalOpenButton = () => {
        setModalOpen(!modalOpen)
        setPassword({newPassword: "", checkPassword: ""})
        setErrorMessages({newPassword: "", checkPassword: ""})
        setFindPasswordData({username:"", questionId:"", findPasswordAnswer:""})
    }

    const changePasswordButtonHandle = () => {
        if(window.confirm("비밀번호를 변경 하시겠습니까?")){
            changePassword.mutate()
            
        }
    }

    return (
        <div css={s.findUserInfoContainer}>
             <div css={s.findPasswordBox}>
                <div css={s.findPasswordTitle}>
                    Password 찾기
                </div>
                <div css={s.usernameInputBox}>
                    <input css={s.usernameInput} 
                            type="text"
                            placeholder='ID를 입력하세요.' 
                            name='username'
                            onChange={onChangeFindPasswordInputHandle}/>
                </div>
                <div css={s.questionBox}>
                    {getQuestionCategory.isLoading ? "" : 
                        getQuestionCategory.data !== undefined ?  (
                            getQuestionCategory.data.data.map(question => (
                                <ul key={question.questionId}>
                                    <li>
                                        <input onChange={(e) => onChangeFindPasswordInputHandle(e, question.questionId)} 
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
                </div>
                <div css={s.findPasswordAnswerBox}>
                    <input css={s.answerInput} 
                            type="text" 
                            name='findPasswordAnswer' 
                            placeholder='질문에 대한 답을 작성하세요.'
                            onChange={onChangeFindPasswordInputHandle} />
                    <button onClick={findPasswordButtonHandle}>찾기</button>
                </div>
                {findPassword.isLoading ? "" :
                         findPassword.data !== undefined ? 
                            (
                            <div css={s.resultBox}>
                                {findPassword.data.data}
                            </div>
                            ) : ""}
                    <div css={s.modalBackDrop(modalOpen)}>
                        <div css={s.modalBox}>
                            <div css={s.modalTitleBox}>
                                <label css={s.modalTitle}>비밀번호 변경</label>
                            </div>
                            <div css={s.modalInputBox}>
                                <input css={s.modalInput} type="password" placeholder='새 비밀번호' onChange={changePasswordOnChangeHandle} value={password.newPassword} name='newPassword'/>
                                <label css={s.errorMessage}>
                                    {errorMessages.newPassword}
                                </label>
                                <input css={s.modalInput} type="password" placeholder='새 비밀번호 확인' onChange={changePasswordOnChangeHandle} value={password.checkPassword} name='checkPassword'/>
                                <label css={s.errorMessage}>
                                    {errorMessages.checkPassword}
                                </label>
                            </div>
                            <div css={s.modalButtonBox}>
                                <button css={s.modalChangePasswordButton} onClick={changePasswordButtonHandle}>변경하기</button>
                                <button css={s.modalChangePasswordButton} onClick={changePasswordModalOpenButton}>취소</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button css={s.changePasswordButton(buttonOpen)} onClick={changePasswordModalOpenButton}>비밀번호 번경</button>
                    </div>
                <div>
                    <button onClick={findUsernameButtonHandle}>아이디 찾기</button>
                </div>
            </div>
        </div>
    );
};

export default FindPassword;