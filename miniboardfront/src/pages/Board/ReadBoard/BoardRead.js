/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import * as s from './BoardReadStyle';
import { BsHandThumbsUp } from 'react-icons/bs'
import { BsHandThumbsUpFill } from 'react-icons/bs'

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
    const [ getBoardData, setGetBoardData ] = useState();
    const [ getCommentData, setGetCommentData ] = useState([]);
    const [ getReplyCommentData, setGetReplyCommentData ] = useState([]);
    const [ addLikeFlag, setAddLikeFlag ] = useState(false);
    const [ getAddLikeCountRefresh, setGetAddLikeCountRefresh ] = useState(true);
    const navigate = useNavigate();

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
        setGetBoardData(response.data)
        return response;
    }, {
        enabled: getBoardFlag,
        onSuccess: () => {
            setGetBoardFlag(false);
        }
    })
    
    const registerComment = useMutation(async() => {
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
    },{
        onSuccess: () => {
            getComments.refetch();
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
        setGetCommentData(response.data)
        return response;
    },{
        enabled: getCommentsFlag,
        onSUccess: () => {
            setGetCommentsFlag(false);
        }
    })
    const deleteComment = useMutation(async (commentId) => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json"
            },
            params: {
                commentId: commentId,
                boardId: boardId
            }
        };
        try {
            await axios.delete("http://localhost:8080/read/board/comment/delete", option);
        } catch (error) {
            alert("삭제 실패");
        }
    },{
        onSuccess: () => {
            getComments.refetch();
        }
    });
    
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
        }catch(error){

        }
    },{
        onSuccess: () => {
            getComments.refetch();
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
            setReplyCommentData({replyComment: ""})
            setGetReplyCommentFlag(true);
        }catch(error){

        }
    },{
        onSuccess: () => {
            getReplyComment.refetch();
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
            setReplyCommentData("");
            setGetReplyCommentFlag(true);
        }catch(error){
            alert("삭제 실패")
        }
    },{
        onSuccess: () => {
            getReplyComment.refetch();
        }
    })

    const addLike = useMutation(async() => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type" : "application/json"
            }
        }
        try{
            const response = await axios.post("http://localhost:8080/read/like", JSON.stringify(boardId), option)
            setAddLikeFlag(response.data)
        }catch(error){
            console.log(error)
        }
    })

    const disLike = useMutation(async() => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            },
            params: {
                boardId: boardId
            }
        }
        const response = await axios.delete("http://localhost:8080/read/dislike", option)
        setAddLikeFlag(response.data)
        
    })

    const getAddLikeFlag = useQuery(["getAddLikeCount"], async() => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            },
            params: {
                boardId: boardId
            }
        }
        const response = await axios.get("http://localhost:8080/read/like/flag", option)
        setAddLikeFlag(response.data)
    },{
        enabled: getAddLikeCountRefresh,
        onSUccess: () => {
            setGetAddLikeCountRefresh(false);
        }
    })

    
    const commentSubmitHandle = () => {
        registerComment.mutate();
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
        setModifyCommentData({...modifyComment})
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

    const backButtonHandle = () => {
        navigate(-1);
    }

    const addLikeHandle = () => {
        // setAddLikeFlag(true);
        addLike.mutate();
    }

    const disLikeHandle = () => {
        // setAddLikeFlag(false);
        disLike.mutate();
    }
    if(getReplyComment.isLoading){
        return <div>로딩중</div>
    }
    if(getBoard.isLoading){
        return <div>로딩중</div>
    }

    return (
        <div css={s.container}>
            <header css={s.headerBox}>
                {/* <div css={s.backButtonBox}> */}
                    {/* <button css={s.backButton} onClick={backButtonHandle}>뒤로</button> */}
                {/* </div> */}
                <div css={s.boardTitle}>
                    <pre>{getBoard.data.data.boardTitle}</pre>
                </div>
                <div css={s.iconAndUserInfoAndDateBox}>
                    <div css={s.userIcon}>
                        아이콘
                    </div>
                    <div css={s.userInfoAndDateBox}>
                        <div css={s.userInfoBox}>
                            <p css={s.userInfo}>{getBoardData.nickname}</p>
                        </div>
                        <div css={s.uploadDateBox}>
                            <p css={s.uploadDate}>{getBoardData.boardDate}</p>
                        </div>
                            {addLikeFlag ? (
                                <>
                                    <button css={s.likeButton} onClick={() => disLikeHandle()}><BsHandThumbsUpFill /></button>
                                </>
                                
                                ) : (
                                <>
                                    <button css={s.likeButton} onClick={() => addLikeHandle()}><BsHandThumbsUp /></button>
                                </>
                            )}
                    </div>
                </div>
            </header>
            <main css={s.mainBox}>
                <div css={s.boardContentBox}>
                    <pre css={s.boardContent}>{getBoard.data.data.boardContent}</pre>
                </div>
            </main>
            <footer css={s.footerBox}>
                <div css={s.addCommentBox}>
                    <textarea value={commentData.comment} css={s.commentTextarea} onChange={commentOnChangeHandle} type="text" placeholder='댓글 작성' name='comment'/>
                    <button css={s.commentButton} onClick={commentSubmitHandle}>댓글 등록</button>
                </div>
                <div css={s.commentBox}>
                    {getComments.isLoading ? "" : getComments.data !== undefined ? getCommentData.map(comment => (
                        <div key={comment.commentId} css={s.comment}>
                            {modifyCommentFlag[comment.commentId] ? (
                            <div key={comment.commentId}>
                                <textarea css={s.modifyCommentTextarea} onChange={(e) => modifyCommentOnChangeHandle(comment.commentId, e)} type="text" name="modifyComment" value={modifyCommentData.modifyComment} /> 
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
                                    <pre css={s.commentDetail}>{comment.comment}</pre>
                                </div>
                                {replyCommentFlag[comment.commentId]  ? (
                                    <>
                                        <div css={s.rplyCommentContainer} key={comment.commentId}>
                                            <div css={s.replyCommentInputAndButtonBox}>
                                                <textarea css={s.replyCommentTextarea} onChange={(e) => replyCommentOnChangeHandle(comment.commentId, e)} name="replyComment" placeholder='답글달기' value={replyCommentData.replyComment}></textarea>
                                                <button css={s.registerReplyCommentButton} onClick={() => registerReplyCommentButton(comment.commentId)}>답글 등록</button>
                                            </div>
                                                {getReplyComment.isLoading ? "로딩중" : getReplyComment !== undefined ? getReplyComment.data.data.map(replyComment => (
                                                <div css={s.replyCommentData} key={replyComment.replyCommentId}> 
                                                    <div css={s.replyDate}> 
                                                        {replyComment.nickname}
                                                        {" / " + replyComment.replyCommentDate}
                                                        <button css={s.replyCommentDeleteButton(replyComment.flag)} onClick={() => deleteReplyCommentHandle(replyComment.replyCommentId)}>삭제</button>
                                                    </div>
                                                    <div css={s.replyCommentBox}>
                                                        <pre css={s.replyCommentDetail}>{replyComment.replyComment}</pre>
                                                    </div>
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