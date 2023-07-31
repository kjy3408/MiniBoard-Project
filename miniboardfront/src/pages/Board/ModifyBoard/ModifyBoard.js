/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as s from './ModifyBoardStyle';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { QueryClient } from 'react-query';

const ModifyBoard = () => {
    const { boardId } = useParams();

    const [ getBoardFlag, setGetBoardFlag ] = useState(true);
    const [ boardContent, setBoardContent ] = useState({title: "", content: ""});
    const [ errorMessages, setErrorMessages ] = useState({title: "", content: ""});
 

    const contentOnChangeHandle = (e) => {
        const { name, value } = e.target;
        setBoardContent({ ...boardContent, [name]: value });
        console.log(boardContent)
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
        console.log(response.data.boardTitle);
        setBoardContent({title: response.data.boardTitle, content: response.data.boardContent})
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
            await axios.post(`http://localhost:8080/mypage/modify/${boardId}`, JSON.stringify(boardContent), option)
        

            alert("수정완료~");
            window.location.replace(`http://localhost:3000/mypage/${userId}`);
        }catch(error){
      
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
                    <input css={s.titleInput} onChange={contentOnChangeHandle} type="text" placeholder='제목을 입력하세요' value={boardContent.title} name='title'/>
                </div>
                <div css={s.errorMessages}>
                    {errorMessages.title}
                </div>
                <div>
                    <textarea css={s.contentInput} onChange={contentOnChangeHandle} placeholder='내용입력' value={boardContent.content} name='content'></textarea>
                </div>
                <div css={s.errorMessages}>
                    {errorMessages.content}
                </div>
                <div css={s.registerButtonContainer}>
                    <button onClick={() => modifyMyBoardHandle(getBoard.data.data.userId)}>등록하기</button>
                </div>
            </main>
        </div>
        </div>
    );
};

export default ModifyBoard;