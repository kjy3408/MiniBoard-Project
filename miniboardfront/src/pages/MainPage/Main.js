/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import * as s from './MainStyle';

const Main = () => {
  const [ getBoardsFlag, setGetBoardsFlag ] = useState(true);
  const [ page, setPage ] = useState({page: 1});
  const [ modifyBoardEditedFlag, setModifyBoardEditedFlag ] = useState(false);
  const [ searchValue, setSearchValue ] = useState({searchValue: ""}) 
  const [ getSearchBoardsFlag, setGetSearchBoardsFlag ] = useState(false);

  const searchBoardHandle = (e) => {
    const { name, value } = e.target;
    setSearchValue({ ...searchValue, [name]: value});
    console.log(searchValue);
  }

  const getBoards = useQuery(["getBoards"], async () => {
    const data = {
      params: {
        ...page
      }
    }
    const response = await axios.get("http://localhost:8080/main/board", data);
    console.log(response)
    for(let i = 0; i < response.data.boards.length; i++){
      if(response.data.boards[i].boardModifyFlag){
        setModifyBoardEditedFlag(prevState => ({...prevState, [response.data.boards[i].boardId]: true}))
        console.log(modifyBoardEditedFlag)
      }
    }
    return response;
    
  }, {
    enabled: getBoardsFlag,
    onSuccess: () => {
      setGetBoardsFlag(false);
    },
  });

  const searchBords = useQuery(["searchBoards"], async() => {
    const data = {
        searchValue: searchValue
    }
    const response = await axios.get("http://localhost:8080/main/board/search", data)
    console.log(response)
    return response;
  }, {
    enabled: getSearchBoardsFlag,
    onSuccess: () => {
      setGetSearchBoardsFlag(false);
    }
  })

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

  const searchButtonHandle = () => {
    setGetSearchBoardsFlag(true);
  }

  const pagination = () => {
    if (getBoards.isLoading) {
      return <div>로딩중</div>;
    }
  
    const nowPage = page.page;
  
    const lastPage = getBoards.data.data.totalCount % 15 === 0
      ? getBoards.data.data.totalCount / 15
      : Math.floor(getBoards.data.data.totalCount / 15) + 1;
  
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
            setGetBoardsFlag(true);
          }}
        >
          처음으로
        </button>
  
        {pageNumbers.map((page) => (
          <button
            onClick={() => {
              setPage({ ...page, page });
              setGetBoardsFlag(true);
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
            setGetBoardsFlag(true);
          }}
        >
          끝으로
        </button>
      </>
    );
  };
  

  const writeButtonHandle = () => {
    if(localStorage.getItem("accessToken") == null){
      if(window.confirm("로그인이 필요합니다.")){
        window.location.href = "http://localhost:3000/auth/login"
      }else{
        return;
      }
    } else{
      window.location.href = "http://localhost:3000/mini/write/board"
    }
  }

  const readBoardHandle = (userId, boardId) => {
    if(localStorage.getItem("accessToken") === null){
      if(window.confirm("로그인이 필요합니다.")){
        window.location.href = "http://localhost:3000/auth/login"
      }else{
        return;
      }
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
            <input css={s.searchInput} onChange={searchBoardHandle} type="text" placeholder='검색어를 입력해주세요.' name='searchValue' />
            <button css={s.searchButton} onClick={searchButtonHandle}>검색</button>
          </div>
          <div css={s.writeButtonContainer}>
            <button css={s.writeButton} onClick={writeButtonHandle}>글쓰기</button>
          </div>
        </div>
      </header>
      <main>
      <table css={s.tableContainer}>
        <thead css={s.thead}>
          <tr>
            <th>No</th>
            <th css={s.thTitle}>제목</th>
            <th>등록일</th>
            <th>글쓴이</th>
            <th>조회수</th>
            <th>수정 여부</th>
          </tr>
        </thead>
        <tbody>
          {getBoards.isLoading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : getBoards.data !== undefined ? (
            getBoards.data.data.boards.map((board, index) => (
              <tr css={s.tableTR2} onClick={() => readBoardHandle(board.userId, board.boardId)} key={board.boardId}>
                <td css={s.numberTable}>{(page.page - 1) * 15 + index + 1}</td>
                <td css={s.titleTable}>{board.boardTitle}</td>
                <td css={s.dateTable}>{board.boardDate}</td>
                <td css={s.nicknameTable}>{board.username}</td>
                <td css={s.viewsTable}>{board.boardViews}</td>
                {modifyBoardEditedFlag[board.boardId] ? (
                  <td css={s.modifyTable}>수정됨</td>) : (<td css={s.modifyTable}></td>)}
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
      <footer>
        {pagination()}
      </footer>
    </div>
  );
};

export default Main;
