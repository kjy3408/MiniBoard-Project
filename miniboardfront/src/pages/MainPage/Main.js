/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import * as s from './MainStyle';

const Main = () => {
  const [ getBoardsFlag, setGetBoardsFlag ] = useState(true);
  const [ getBoardData, setGetBoardData ] = useState({page: 1, searchValue:""});
  const [ modifyBoardEditedFlag, setModifyBoardEditedFlag ] = useState(false);  
  
  const searchBoardHandle = (e) => {
    setGetBoardData({ ...getBoardData, searchValue: e.target.value});
  }

  const getBoards = useQuery(["getBoards"], async () => {
    const data = {
      params: {
        ...getBoardData
      }
    }
    const response = await axios.get("http://localhost:8080/main/board", data);
    for(let i = 0; i < response.data.boards.length; i++){
      if(response.data.boards[i].boardModifyFlag){
        setModifyBoardEditedFlag(prevState => ({...prevState, [response.data.boards[i].boardId]: true}))
      }
    }

    console.log(response.data.boards[0])
    return response;
    
  }, {
    enabled: getBoardsFlag,
    onSuccess: () => {
      setGetBoardsFlag(false);
      getBoardData.searchValue = ""
    }
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

  const searchOnKeyUp = (e) => {
    if(e.keyCode === 13){
      searchButtonHandle();
    }
  }

  const searchButtonHandle = () => {
    setGetBoardsFlag(true);
  }

  const mainTitleHandle = () => {
    window.location.href = "http://localhost:3000/"
  }

  const pagination = () => {
    if (getBoards.isLoading) {
      return <div>로딩중</div>;
    }
  
    const nowPage = getBoardData.page;
  
    const lastPage = getBoards.data.data.totalCount % 15 === 0
      ? getBoards.data.data.totalCount / 15
      : Math.floor(getBoards.data.data.totalCount / 15) + 1;
  
    const startIndex = nowPage % 5 === 0 ? nowPage - 4 : nowPage - (nowPage % 5) + 1;
    const endIndex = startIndex + 4 <= lastPage ? startIndex + 4 : lastPage;
  
    const pageNumbers = new Array();
  
    for (let i = startIndex; i <= endIndex; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <>
        <button css={s.pageButton}disabled={nowPage === 1} onClick={() => {
            setGetBoardData({ ...getBoardData, page: 1 });
            setGetBoardsFlag(true);}}>처음으로</button>
  
        {pageNumbers.map((page) => (
          <button css={s.pageNumberButton} onClick={() => {
              setGetBoardData({ ...getBoardData, page});
              setGetBoardsFlag(true);}}
            disabled={page === nowPage} key={page}>{page}</button>))}
  
        <button css={s.pageButton} disabled={nowPage === lastPage} onClick={() => {
            setGetBoardData({ ...getBoardData, page: lastPage });
            setGetBoardsFlag(true);}}>끝으로</button>
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
      }
      else{
        return;
      }
    }else{
      increaseViews.mutate({userId, boardId});
    }
  }

  return (
    <div css={s.container} >
      <header css={s.headerBox}>
        <div css={s.headerTitle}>
          <p css={s.title} onClick={mainTitleHandle}>자유게시판</p>
        </div>
        <div css={s.searchBarAndWriteButtonBox}>
          <div css={s.searchBarBox}>
            <input css={s.searchInput} onChange={searchBoardHandle} onKeyUp={searchOnKeyUp} type="text" placeholder='검색어를 입력해주세요.' name='searchValue' value={getBoardData.searchValue} />
            <button css={s.searchButton} onClick={searchButtonHandle}>검색</button>
          </div>
          <div css={s.writeButtonBox}>
            <button css={s.writeButton} onClick={writeButtonHandle}>글쓰기</button>
          </div>
        </div>
      </header>
      <main css={s.mainBox}>
        <table css={s.tableBox}>
          <thead css={s.tableHead}>
            <tr >
              <th css={s.tableHeadNumber} >No</th>
              <th css={s.tableHeadTitle}>제목</th>
              <th css={s.tableHeadRegisterDate}>등록일</th>
              <th css={s.tableHeadWriteUser} >글쓴이</th>
              <th css={s.tableHeadViews} >조회수</th>
              <th css={s.tableHeadLikeCount} >좋아요</th>
              <th css={s.tableHeadCommentCount}>댓글수</th>
              <th css={s.tableHeadModify}>수정 여부</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>공지</td>
              <td>공지</td>
              <td>공지</td>
              <td>공지</td>
              <td>공지</td>
              <td>공지</td>
              <td>공지</td>
            </tr>
            {getBoards.isLoading ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : getBoards.data !== undefined ? (
              getBoards.data.data.boards.map((board, index) => (
                <tr css={s.tableRow} onClick={() => readBoardHandle(board.userId, board.boardId)} key={board.boardId}>
                  <td css={s.tableDataNumber}>{(getBoardData.page - 1) * 15 + index + 1}</td>
                  <td css={s.tableDataTitle}>{board.boardTitle }</td>
                  <td css={s.tableDataDate}>{board.boardDate}</td>
                  <td css={s.tableDataNickname}>{board.nickname}</td>
                  <td css={s.tableDataViews}>{board.boardViews}</td>
                  <td css={s.tableDataLikeCount}>{board.likeCount}</td>
                  <td css={s.tableDataCommentCount}>{board.commentCount}</td>
                  {modifyBoardEditedFlag[board.boardId] ? (
                    <td css={s.tableDataModify}>수정됨</td>) : (<td css={s.tableDataModify}></td>)}
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
      <footer css={s.footerContainer}>
        {pagination()}
      </footer>
    </div>
  );
};

export default Main;
