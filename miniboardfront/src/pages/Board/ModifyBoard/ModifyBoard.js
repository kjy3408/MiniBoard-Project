/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as s from './ModifyBoardStyle';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';

const ModifyBoard = () => {
    const { boardId } = useParams();

    const [ getBoardFlag, setGetBoardFlag ] = useState(true);
    const [ modifyBoardContent, setModifyBoardContent ] = useState({modifyTitle: "", modifyContent: ""});
    const [ errorMessages, setErrorMessages ] = useState({title: "", content: ""});

    const contentOnChangeHandle = (e) => {
        const { name, value } = e.target;
        setModifyBoardContent({ ...modifyBoardContent, [name]: value });
        console.log(modifyBoardContent)
    }  

    
    const getBoard = useQuery(["getBoard"], async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            params: {
                boardId: boardId
            }
        }
        const response = await axios.get("http://localhost:8080/read/board", option)
        setModifyBoardContent({modifyTitle: response.data.boardTitle, modifyContent: response.data.boardContent})
        console.log(modifyBoardContent);
        return response;
    }, {
        enabled: getBoardFlag,
        onSuccess: () => {
            setGetBoardFlag(false);
        }
    })

    const modifyMyBoard = useMutation(async(userId) => {
        const option = {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type" : "application/json"
            }
        }
        try{
            await axios.post(`http://localhost:8080/mypage/modify/${boardId}`, JSON.stringify(modifyBoardContent), option)
            alert("수정완료~");
            window.location.replace(`http://localhost:3000/myboard/${userId}`);
        }catch(error){
            console.log(error)
            setErrorMessages(error.response.data.errorData);
        }
    })

    const modifyMyBoardHandle = (userId) => {
        modifyMyBoard.mutate(userId);
    }

    if(getBoard.isLoading){
        return <div>로딩중</div>
    }

    return (
        <div>
             <div css={s.writeBoardContainer}>
            <header css={s.headerContainer}>
                <label css={s.text}>
                    글  수  정
                </label>
            </header>
            <main css={s.mainConatiner}> 
                <div css={s.titleContainer}>
                    <input css={s.titleInput} onChange={contentOnChangeHandle} type="text" placeholder='제목을 입력하세요' value={modifyBoardContent.modifyTitle} name='modifyTitle'/>
                </div>
                <div css={s.errorMessages}>
                    {errorMessages.modifyTitle}
                </div>
                <div>
                    <textarea css={s.contentInput} onChange={contentOnChangeHandle} placeholder='내용입력' value={modifyBoardContent.modifyContent} name='modifyContent'></textarea>
                </div>
                <div css={s.errorMessages}>
                    {errorMessages.modifyContent}
                </div>
                <div css={s.registerButtonContainer}>
                    <button css={s.registerButton} onClick={() => modifyMyBoardHandle(getBoard.data.data.userId)}>등록하기</button>
                </div>
            </main>
        </div>
        </div>
    );
};

export default ModifyBoard;