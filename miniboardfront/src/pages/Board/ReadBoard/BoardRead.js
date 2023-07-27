/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as s from './BoardReadStyle';

const BoardRead = () => {
    const [ getBoardFlag, setGetBoardFlag ] = useState(true);
    const { boardId } = useParams();
    const [ commentData, setCommentData ] = useState({comment: "", boardId: boardId});
    const [ getCommentsFlag, setGetCommentsFlag ] = useState(true);
    const [ deleteFlag, setDeleteFlag ] = useState(false);

    const commentOnChangeHandle = (e) => {
        const { name, value } = e.target;
        setCommentData({...commentData, [name]: value});
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
        // console.log(response);
        return response;
    }, {
        enabled: getBoardFlag,
        onSuccess: () => {
            setGetBoardFlag(false);
        }
    })
    
    const submitComment = useMutation(async() => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type" : "application/json"
            }
        }

        try{
            await axios.post("http://localhost:8080/read/board/comment", JSON.stringify(commentData), option);
            alert("댓글 등록 완료~")
            
        }catch(error){

        }
    })

    const getComments = useQuery(["getComment"], async() => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            },
            params: {
                boardId: boardId
            }
        }
        const response = await axios.get("http://localhost:8080/read/get/comments", option)
        // console.log(response.data);
        return response;
    },{
        enabled: getCommentsFlag,
        onSUccess: () => {
            setGetCommentsFlag(false);
        }
    })

    const deleteComment = useMutation(async(commentId) => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type" : "application/json"
            },
            params: {
                commentId: commentId
            }
        }
        try{
            await axios.delete("http://localhost:8080/read/board/comment/delete", option)
        }catch(error){
            alert("삭제 실패")
        }
    })
    
    const commentSubmitHandle = (commentId) => {
        submitComment.mutate(commentId);
        setCommentData({...commentData, comment:""});
    }

    const deleteButtonHandle = (commentId) => {
        if(window.confirm("댓글을 삭제하시겠습니까?")){
            deleteComment.mutate(commentId);
        }
    }

    const modifyButtonHandle = () => {

    }
    
    if(getBoard.isLoading){
        return <div>로딩중</div>
    }

    return (
        <div css={s.BoardReadContainer}>
            <header css={s.headerContainer}>
                <div css={s.boardTitle}>
                    {getBoard.data.data.boardTitle}
                </div>
            </header>
            <main css={s.mainContainer}>
                <div css={s.boardContent}>
                    {getBoard.data.data.boardContent}
                </div>
            </main>
            <footer css={s.footerContainer}>
                <div css={s.addCommentContainer}>
                    <textarea value={commentData.comment} css={s.commentTextarea} onChange={commentOnChangeHandle} type="text" placeholder='댓글 작성' name='comment'/>
                    <button css={s.commentButton} onClick={commentSubmitHandle}>댓글 등록</button>
                </div>
                <div css={s.comentContainer}>
                    {getComments.isLoading ? "" : getComments.data !== undefined ? getComments.data.data.map(comment => (
                        <div key={comment.commentId} css={s.comment}>
                            <div css={s.commentText}>
                                {comment.comment}
                            </div>
                            <div css={s.buttonContainer}>
                                <button css={s.commnetDeleteAndModifyButton(comment.flag)} onClick={() => modifyButtonHandle(comment.commentId)}> modify </button>
                                <button css={s.commnetDeleteAndModifyButton(comment.flag)} onClick={() => deleteButtonHandle(comment.commentId)}> delete </button>
                            </div>
                        </div>
                    )) : ""}
                </div>
            </footer>
        </div>
    );
};

export default BoardRead;