/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as s from './MyPageStyle';
import { useQuery } from 'react-query';
import axios from 'axios';

const MyPage = () => {
    const { userId } = useParams();
    const [ getMyBoardsFlag, setGetMyboardsFlag ] = useState(true);
    const [page, setPage] = useState({page: 1});
    const currentPage = 2; 
    const postsPerPage = 15;

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

    const readBoardHandle = (boardId) => {
        
    }
    
  const pagination = () => {
    if (getMyBoards.isLoading) {
      return <div>로딩중</div>;
    }
  
    const nowPage = page.page;
  
    const lastPage = getMyBoards.data.data.totalCount % 15 === 0
      ? getMyBoards.data.data.totalCount / 15
      : Math.floor(getMyBoards.data.data.totalCount / 15) + 1;
  
    const startIndex = nowPage % 5 === 0 ? nowPage - 4 : nowPage - (nowPage % 5) + 1;
    const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;
  
    const pageNumbers = [];
  
    for (let i = startIndex; i <= endIndex; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <>
        <button
          disabled={nowPage === 1}
          onClick={() => {
            setPage({ ...page, page: 1 });
            setGetMyboardsFlag(true);
          }}
        >
          처음으로
        </button>
  
        {pageNumbers.map((page) => (
          <button
            onClick={() => {
              setPage({ ...page, page });
              setGetMyboardsFlag(true);
            }}
            disabled={page === nowPage}
            key={page}
          >
            {page}
          </button>
        ))}
  
        <button
          disabled={nowPage === lastPage}
          onClick={() => {
            setPage({ ...page, page: lastPage });
            setGetMyboardsFlag(true);
          }}
        >
          끝으로
        </button>
      </>
    );
  };

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
                        onClick={() => readBoardHandle(board.userId, board.boardId)}
                        key={board.boardId}
                    >
                        <td css={s.numberTable}>{(page.page - 1) * 15 + index + 1}</td>
                        <td css={s.titleTable}>{board.boardTitle}</td>
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