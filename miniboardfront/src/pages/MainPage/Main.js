/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as s from './MainStyle';
import { useQuery } from 'react-query';
import axios from 'axios';

const Main = () => {
  const [getBoardsFlag, setGetBoardsFlag] = useState(true);

  const getBoards = useQuery(["getBoards"], async () => {
    const response = await axios.get("http://localhost:8080/main/board");
    console.log(response);
    return response;
  }, {
    enabled: getBoardsFlag,
    onSuccess: () => {
      setGetBoardsFlag(false);
    },
  });

  const writeButtonHandle = () => {
    if(localStorage.getItem("accessToken") == null){
      alert("로그인이 필요합니다.")
      window.location.href = "http://localhost:3000/auth/login"
    } else{
      window.location.href = "http://localhost:3000/write/board"
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
            <button onClick={writeButtonHandle}>글쓰기</button>
          </div>
        </div>
        {/* <div css={s.writeButtonContainer}> */}
        {/* </div> */}
      </header>
      <main>
        <table css={s.tableContainer}>
          <thead css={s.tableHeader}>
            <tr css={s.tableTR1}>
              <th css={s.th1}>글쓴이</th>
              <th css={s.th2}>제목</th>
              <th css={s.th3}>등록일</th>
              <th css={s.th4}>조회수</th>
            </tr>
          </thead>
          <tbody>
            {getBoards.isLoading ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : getBoards.data !== undefined ? (
              <>
                {getBoards.data.data.map((board) => (
                  <tr css={s.tableTR2} key={board.boardId}>
                    <td css={s.nicknameTable}>{board.nickname}</td>
                    <td css={s.titleTable}>{board.boardTitle}</td>
                    <td css={s.dateTable}>{board.boardDate}</td>
                    <td css={s.viewsTable}>{board.boardViews}</td>
                  </tr>
                ))}
              </>
            ) : (
              <tr>
                <td>글이없습니다</td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Main;
