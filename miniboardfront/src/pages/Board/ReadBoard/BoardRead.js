/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as s from './BoardReadStyle';

const BoardRead = () => {
    const { boardId } = useParams();
    const [ getBoardFlag, setGetBoardFlag ] = useState(true);
    const [ commentData, setCommentData ] = useState({comment: "", boardId: boardId});
    const [ getCommentsFlag, setGetCommentsFlag ] = useState(true);
    const [ modifyCommentFlag, setModifyCommentFlag ] = useState({});
    const [ modifyCommentData, setModifyCommentData ] = useState({modifyComment: "", commentId: "", boardId: boardId})
    const [ modifyCommentEditedFlag, setModifyCommentEditedFlag ] = useState(false); 
    const [ replyCommentData, setReplyCommentData ] = useState({replyComment: "", commentId: "" ,boardId: boardId});
    const [ replyCommentFlag, setReplyCommentFlag ] = useState({});
    const [ getReplyCommentFlag, setGetReplyCommentFlag] = useState(false);
    const [ getCommentId, setGetCommentId ] = useState("");
    const [ openComment, setOpenComment ] = useState(null);

    const commentOnChangeHandle = (e) => {
        const { name, value } = e.target;
        setCommentData({...commentData, [name]: value});
    }

    const modifyCommentOnChangeHandle = (commentId, e) => {
        const { name, value } = e.target;
        setModifyCommentData(prevState => ({ ...prevState, [name]: value, commentId: commentId }));
    }

    const replyCommentOnChangeHandle = (commentId, e) => {
        const { name, value } = e.target;
        setReplyCommentData(prevState => ({ ...prevState, [name]: value, commentId: commentId }));
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
        for(let i = 0; i < response.data.length; i++){
            if(response.data[i].modifyCommentFlag){
                setModifyCommentEditedFlag(prevState => ({ ...prevState, [response.data[i].commentId]: true }));
            }
        }

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
                commentId : commentId
            }
        }
        try{
            await axios.delete("http://localhost:8080/read/board/comment/delete", option)
            window.location.reload();
        }catch(error){
            alert("삭제 실패")
        }
    })

    const modifyComment = useMutation(async(commentId) => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type" : "application/json"
            }
        }
        try{
            await axios.post("http://localhost:8080/read/board/comment/modify", JSON.stringify(modifyCommentData), option)
            setModifyCommentFlag(prevState => ({ ...prevState, [commentId]: false }));
            window.location.reload();
        }catch(error){

        }
    })

    const registerReplyComment = useMutation(async() => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type" : "application/json"
            }
        }
        try{
            await axios.post("http://localhost:8080/read/board/replycomment/", JSON.stringify(replyCommentData), option)
            window.location.reload();
        }catch(error){

        }
    })

    const getReplyComment = useQuery(["getReplyComment"], async() => {
        if(replyCommentFlag[getCommentId]){
            const option = {
                headers: {
                   Authorization : `Bearer ${localStorage.getItem("accessToken")}`
                },
                params: {
                    getCommentId: getCommentId
                }
            }
            const response  = await axios.get("http://localhost:8080/read/replycomment", option)
            return response;
        }
    }, {
        enabled: getReplyCommentFlag,
        onSuccess: () => {
            setGetReplyCommentFlag(false);
        }
    })

    const deleteReplyComment = useMutation(async(replyCommentId) => {
        const option = {
            headers: {
               Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            },
            params: {
                replyCommentId: replyCommentId
            }
        }
        try{
            await axios.delete("http://localhost:8080/read/delete/replycomment", option)
            window.location.reload();
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

    const modifyButtonHandle = (commentId) => {
        setModifyCommentFlag(prevState => ({ ...prevState, [commentId]: true }));

    }

    const modifyOkButtonHandle = (commentId) => {
        if(window.confirm("댓글을 수정하시겠습니까?")){
            modifyComment.mutate(commentId)
        }
    }
    
    const modifyCancelHandle = () => {
        setModifyCommentFlag(false);
    }
      
    const replyCommentButtonHandle = (commentId) => {
        setReplyCommentFlag((prevState) => ({...prevState, [commentId]: !prevState[commentId]}));
       
        Object.keys(replyCommentFlag).forEach((key) => {
          if (key !== commentId && replyCommentFlag[key]) {
            setReplyCommentFlag((prevState) => ({
              ...prevState,
              [key]: false,
            }));
          }
        });
        if (!replyCommentFlag[commentId]) {
          setGetCommentId(commentId);
          setGetReplyCommentFlag(!getReplyCommentFlag);
        } else {
          setGetReplyCommentFlag(false);
        }
      };

    const registerReplyCommentButton = (commentId) => {
        if(window.confirm("답글을 다시겠습니까?")) {
            registerReplyComment.mutate(commentId);
        }
    }

    const deleteReplyCommentHandle = (replyCommentId) => {
        if(window.confirm("답글을 삭제하시겠습니까?")){
            deleteReplyComment.mutate(replyCommentId);
        }
    }

    if(getReplyComment.isLoading){
        return <div>로딩중</div>
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
                            {modifyCommentFlag[comment.commentId] ? (
                            <div key={comment.commentId}>
                                <textarea css={s.modifyCommentTextarea} onChange={(e) => modifyCommentOnChangeHandle(comment.commentId, e)} type="text" name="modifyComment"  value={modifyCommentData.modifyComment} /> 
                                <div css={s.modifyOkAndCancelContainer}>
                                    <button css={s.modifyOkAndCancelButton} onClick={() => modifyOkButtonHandle(comment.commentId)}>등록하기</button>
                                    <button css={s.modifyOkAndCancelButton} onClick={modifyCancelHandle}>취소</button>
                                </div>
                            </div>
                                                                    ) : (

                            <>
                                <div css={s.commentDate}> 
                                    <div >
                                        <label css={s.nicknameFontSize} >
                                            {comment.nickname}
                                        </label>
                                        <label css={s.dateFontSize}>
                                            {" / " + comment.commentDate}
                                        </label>
                                        {modifyCommentEditedFlag[comment.commentId] ? (<label key={comment.commentId}> / 수정됨</label>) : ""}
                                    </div>
                                    <div css={s.buttonContainer}>
                                        <button css={s.commnetDeleteAndModifyButton(comment.flag)} onClick={() => modifyButtonHandle(comment.commentId)}> 수정 </button>
                                        <button css={s.commnetDeleteAndModifyButton(comment.flag)} onClick={() => deleteButtonHandle(comment.commentId)}> 삭제 </button>
                                        <button css={s.recommentButton} onClick={() => replyCommentButtonHandle(comment.commentId)}>{replyCommentFlag[comment.commentId] ? "닫기" : "답글 달기"}{" "} </button>
                                    </div>
                                </div>
                                <div css={s.commentText}>
                                    {comment.comment}
                                </div>
                                {replyCommentFlag[comment.commentId]  ? (
                                    <>
                                        <div css={s.rplyCommentContainer} key={comment.commentId}>
                                            <div css={s.replyCommentInputAndButtonBox}>
                                                <textarea css={s.replyCommentTextarea} onChange={(e) => replyCommentOnChangeHandle(comment.commentId, e)} name="replyComment" placeholder='답글달기'></textarea>
                                                <button css={s.registerReplyCommentButton} onClick={() => registerReplyCommentButton(comment.commentId)}>답글 등록</button>
                                            </div>
                                                {getReplyComment.isLoading ? "로딩중" : getReplyComment !== undefined ? getReplyComment.data.data.map(replyComment => (
                                                <div css={s.replyCommentData} key={replyComment.replyCommentId}> 
                                                    <div css={s.replyDate}> 
                                                        {replyComment.nickname}
                                                        {" / " + replyComment.replyCommentDate}
                                                        <button css={s.replyCommentDeleteButton} onClick={() => deleteReplyCommentHandle(replyComment.replyCommentId)}>삭제</button>
                                                    </div>
                                                    <div css={s.replyCommentBox}>
                                                        {replyComment.replyComment}
                                                    </div>
                                                    {/* <div css={s.buttonContainer}>
                                                        <button css={s.commnetDeleteAndModifyButton(replyComment.flag)} onClick={() => modifyButtonHandle(replyComment.replyCommentId)}> 수정 </button>
                                                        <button css={s.commnetDeleteAndModifyButton(replyComment.flag)} onClick={() => deleteButtonHandle(replyComment.replyCommentId)}> 삭제 </button>
                                                        <button css={s.recommentButton} onClick={(e) => replyCommentButtonHandle(comment.commentId, e)}>답글 달기</button>
                                                    </div> */}
                                                </div>    
                                            )): ""}
                                        </div>
                                    </>
                                ) : ("")}
                             </>
                            )}
                        </div>
                    )) : ""}
                </div>
            </footer>
        </div>
    );
};

export default BoardRead;