/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import * as s from './MyBoardStyle';

const MyBoard = () => {
    const { userId } = useParams();
    const [ getMyBoardsFlag, setGetMyboardsFlag ] = useState(true);
    const navigate = useNavigate();

    const getMyBoards = useQuery(["getMyBoards"], async() => {
        const option = {
            headers : {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }
        }

        const response = await axios.get(`http://localhost:8080/mypage/${userId}`, option)
        console.log(response)
        return response;
    }, {
        enabled: getMyBoardsFlag,
        onSuccess: () => {
            setGetMyboardsFlag(false);
        }
    })

    const deleteMyBoard = useMutation(async(boardId) => {
      const option = {
        headers: {
          Authorization : `Bearer ${localStorage.getItem("accessToken")}`
        },
        params: {
          boardId: boardId
        }
      }

      try{
        await axios.delete("http://localhost:8080/mypage/delete", option)
        window.location.reload();
      }catch(error){

      }
    })

    const readBoardHandle = (boardId) => {
        window.location.href = `http://localhost:3000/mini/board/${boardId}`
    }
    
    const modifyButtonHandle = (boardId) => {
      if(window.confirm("수정 하시겠습니까?")){
        window.location.href = `http://localhost:3000/mypage/modify/${boardId}`
      }
    }

    const deleteButtonHandle = (boardId) => {
      if(window.confirm("정말 삭제 하시겠습니까?")){
        deleteMyBoard.mutate(boardId);
      }
    }

    const backButtonHandle = () => {
      navigate(-1);
    }
    return (
        <div css={s.container}>
            <header css={s.headerBox}>
                <button css={s.backButton} onClick={backButtonHandle}>뒤로</button>
                <p css={s.headerTitle}>내가 쓴 글</p>
            </header>
            <main css={s.mainBox}>
              <table css={s.tableBox}>
                  <thead css={s.tableHead}>
                      <tr>
                        <th css={s.tableHeadNumber} >No</th>
                        <th css={s.tableHeadTitle}>제목</th>
                        <th css={s.tableHeadRegisterDate}>등록일</th>
                        <th css={s.tableHeadViews} >조회수</th>
                        <th css={s.tableHeadLikeCount} >좋아요</th>
                        <th css={s.tableHeadCommentCount}>댓글수</th>
                        {/* <th css={s.tableHeadModify}>수정 여부</th> */}
                      </tr>
                  </thead>
                  <tbody>
                  {getMyBoards.isLoading ? (
                      <tr>
                        <td>Loading...</td>
                      </tr>
                  ) : getMyBoards.data !== undefined ? (
                      getMyBoards.data.data.map((board, index) => (
                      <tr
                          css={s.tableRow}
                          onClick={() => readBoardHandle(board.boardId)}
                          key={board.boardId}
                      >
                          <td css={s.tableDataNumber}>{index + 1} </td>
                          <td css={s.tableDataTitle}>
                            {board.boardTitle}
                            <div className="buttons">
                              <button css={s.deleteAndModifyButton} onClick={(e) => {e.stopPropagation(); modifyButtonHandle(board.boardId)}}>수정하기</button>
                              <button css={s.deleteAndModifyButton} onClick={(e) => {e.stopPropagation(); deleteButtonHandle(board.boardId)}}>삭제하기</button>
                            </div>
                          </td>
                          <td css={s.tableDataDate}>{board.boardDate}</td>
                          <td css={s.tableDataViews}>{board.boardViews}</td>
                          <td css={s.tableDataLikeCount}>{board.likeCount}</td>
                          <td css={s.tableDataCommentCount}>{board.commentCount}</td>
                      </tr>
                      ))
                  ) : (
                      <tr>
                      <td>No data available.</td>
                      </tr>
                  )}
                  </tbody>
              </table>
            </main>
            <div>
                {/* {pagination()} */}
            </div>
        </div>
    );
};


export default MyBoard;