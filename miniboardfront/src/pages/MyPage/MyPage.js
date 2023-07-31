/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as s from './MyPageStyle';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { QueryClient } from 'react-query';

const MyPage = () => {
    const { userId } = useParams();
    const [ getMyBoardsFlag, setGetMyboardsFlag ] = useState(true);
    const queryClient = new QueryClient();    

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
    return (
        <div css={s.myPageContainer}>
            <header css={s.myPageLabelContainer}>
                <label  css={s.myPageLabel}>내가 쓴 글</label>
            </header>
            <table css={s.tableContainer}>
                <thead css={s.thead}>
                    <tr>
                    <th css={s.thNumber}>No</th>
                    <th css={s.thTitle}>제목</th>
                    <th css={s.thDate}>등록일</th>
                    <th css={s.thUser}>글쓴이</th>
                    <th css={s.thViews}>조회수</th>
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
                        css={s.tableTR2}
                        onClick={() => readBoardHandle(board.boardId)}
                        key={board.boardId}
                    >
                        <td css={s.numberTable}>{index + 1} </td>
                        
                        <td css={s.titleTable}>
                          {board.boardTitle}
                          <div className="buttons">
                            <button css={s.deleteAndModifyButton} onClick={(e) => {e.stopPropagation(); modifyButtonHandle(board.boardId)}}>수정하기</button>
                            <button css={s.deleteAndModifyButton} onClick={(e) => {e.stopPropagation(); deleteButtonHandle(board.boardId)}}>삭제하기</button>
                          </div>
                        </td>
                        <td css={s.dateTable}>{board.boardDate}</td>
                        <td css={s.nicknameTable}>{board.username}</td>
                        <td css={s.viewsTable}>{board.boardViews}</td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td>No data available.</td>
                    </tr>
                )}
                </tbody>
            </table>
            <div>
                {/* {pagination()} */}
            </div>
        </div>
    );
};

export default MyPage;