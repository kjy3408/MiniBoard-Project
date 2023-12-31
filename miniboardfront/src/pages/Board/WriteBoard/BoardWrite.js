/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import * as s from './BoardWriteStyle';

const BoardWrite = () => {
    const [ boardContent, setBoardContent ] = useState({title: "", content: ""});
    const [ errorMessages, setErrorMessages ] = useState({title: "", content: ""});

    const contentOnChangeHandle = (e) => {
        const { name, value } = e.target;
        setBoardContent({ ...boardContent, [name]: value });
    }  

    const registerBoard = useMutation(async() => {
        const option = {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type" : "application/json"
            }
        }
        try{
            await axios.post("http://localhost:8080/write/board", JSON.stringify(boardContent), option)
            alert("등록완료~");
            window.location.replace("http://localhost:3000/auth/home");
        }catch(error){
            setErrorMessages(error.response.data.errorData);
      
        }
    })

    const registerBoardHandle = () => {
        registerBoard.mutate();
    }

    return (
        <div css={s.container}>
            <header css={s.headerBox}>
                <p css={s.headerTitle}>
                    글 쓰 기
                </p>
            </header>
            <main css={s.mainBox}> 
                <div css={s.titleInputBox}>
                    <input css={s.titleInput} onChange={contentOnChangeHandle} type="text" placeholder='제목을 입력하세요' name='title'/>
                </div>
                <div css={s.errorMessages}>
                    {errorMessages.title}
                </div>
                <div>
                    <textarea css={s.contentInput} onChange={contentOnChangeHandle} placeholder='내용입력' name='content'></textarea>
                </div>
                <div css={s.errorMessages}>
                    {errorMessages.content}
                </div>
                <div css={s.registerButtonBox}>
                    <button css={s.registerButton} onClick={registerBoardHandle}>등록하기</button>
                </div>
            </main>
        </div>
    );
};

export default BoardWrite;