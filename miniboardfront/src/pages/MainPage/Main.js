/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import * as s from './MainStyle';

const Main = () => {
  const [getBoardsFlag, setGetBoardsFlag] = useState(true);
  const [page, setPage] = useState({page: 1});
  const currentPage = 2; // Replace this with the actual current page number
  const postsPerPage = 15; // Replace this with the actual number of posts per page
  
  // Calculate the starting index of the boards for the current page
  const startIndex = (currentPage - 1) * postsPerPage;
  const getBoards = useQuery(["getBoards"], async () => {
    const data = {
      params: {
        ...page
      }
    }
    const response = await axios.get("http://localhost:8080/main/board", data);
    // console.log(response);
    return response;
  }, {
    enabled: getBoardsFlag,
    onSuccess: () => {
      setGetBoardsFlag(false);
    },
  });

  const increaseViews = useMutation(async({userId, boardId}) => {
    const option = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type" : "application/json"
      }
    }

    try{
      await axios.post("http://localhost:8080/main/board/views", {userId, boardId}, option)
      window.location.href = `/mini/board/${boardId}`
      
    }catch(error){

    }
  })

  const pagination = () => {
    if(getBoards.isLoading) {
        return (<div>로딩중</div>);
    }

    const nowPage = page.page;

    const lastPage = getBoards.data.data.totalCount % 15 === 0 
        ? getBoards.data.data.totalCount / 15
        : Math.floor(getBoards.data.data.totalCount / 15) + 1;
    
    const startIndex = nowPage % 5 === 0 ? nowPage - 4 : nowPage - (nowPage % 5) + 1;
    const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;

    const pageNumbers = [];

    for(let i = startIndex; i <= endIndex; i++) {
        pageNumbers.push(i);
    }
  
    return (
      <>
        <button disabled={nowPage === 1} onClick={() => {
              setPage({...nowPage, page: 1});
              setGetBoardsFlag(true);
        }}>처음으로</button>

        {/* <button disabled={nowPage === 1} onClick={() => {
              setPage({...nowPage, page: nowPage - 1});
              setGetBoardsFlag(true);
        }}></button> */}

        {pageNumbers.map(page => (<button onClick={() => { 
            setPage({...nowPage, page});
            setGetBoardsFlag(true);
        }}disabled = {page === nowPage}>{page}</button>))}

        {/* <button disabled={nowPage === lastPage} onClick={() => {
              setPage({...nowPage, page: nowPage + 1});
              setGetBoardsFlag(true);
        }}></button> */}

        <button disabled={nowPage === lastPage} onClick={() => {
              setPage({...nowPage, page: lastPage});
              setGetBoardsFlag(true);
        }}>끝으로</button>
      </>
    )
  }

  const writeButtonHandle = () => {
    if(localStorage.getItem("accessToken") == null){
      alert("로그인이 필요합니다.")
      window.location.href = "http://localhost:3000/auth/login"
    } else{
      window.location.href = "http://localhost:3000/mini/write/board"
    }
  }

  const readBoardHandle = (userId, boardId) => {
    if(localStorage.getItem("accessToken") === null){
      alert("로그인이 필요합니다.");
      window.location.href = "http://localhost:3000/auth/login"
    }else{
      increaseViews.mutate({userId, boardId});
    }
  }

  return (
    <div css={s.mainContainer}>
        <div css={s.mainTitle}>자유게시판</div>
      <header css={s.header}>
        <div css={s.searchBarAndWriteButtonContainer}>
          <div css={s.searchBarContainer}>
            <input css={s.searchInput} type="text" placeholder='검색어를 입력해주세요.' />
            <button css={s.searchButton}>검색</button>
          </div>
          <div css={s.writeButtonContainer}>
            <button css={s.writeButton} onClick={writeButtonHandle}>글쓰기</button>
          </div>
        </div>
      </header>
      <main>
        <table css={s.tableContainer}>
          <th css={s.thNumber}>No</th>
          <th css={s.thTitle}>제목</th>
          <th css={s.thDate}>등록일</th>
          <th css={s.thUser}>글쓴이</th>
          <th css={s.thViews}>조회수</th>
        {getBoards.isLoading ? "" : getBoards.data !== undefined ? getBoards.data.data.boards.map((board, index) => (
          <tr css={s.tableTR2} onClick={() => readBoardHandle(board.userId, board.boardId)} key={board.boardId}>
            <td css={s.numberTable}>{(page.page - 1) * 15 + index + 1}</td>
            <td css={s.titleTable}>{board.boardTitle}</td>
            <td css={s.dateTable}>{board.boardDate}</td>
            <td css={s.nicknameTable}>{board.username}</td>
            <td css={s.viewsTable}>{board.boardViews}</td>
          </tr>
        )) : ""}
        </table>
      </main>
      <footer>
        {pagination()}
      </footer>
    </div>
  );
};

export default Main;
