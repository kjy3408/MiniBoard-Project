/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import * as s from './MyPageStyle';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  
  const [ getUserInfoFlag, setGetUserInfoFlag ] = useState(true);
  const navigate = useNavigate();
  
  const getUserInfo = useQuery(["getUserInfo"], async() => {
    const option = {
        headers: {
            Authorization : `Bearer ${localStorage.getItem("accessToken")}`
        }
    }
    const response = await axios.get("http://localhost:8080/main/userinfo", option)
    
    return response;
},{
    enabled: getUserInfoFlag,
    onSuccess: () => {
        setGetUserInfoFlag(false);
    }
})

  const myBoardButtonHandle = () => {
    window.location.href = `http://localhost:3000/myboard/${getUserInfo.data.data.userId}`;
  }




  const alreadyReadBoardButtonHandle = () => {
    window.location.href = `http://localhost:3000/already/read/${getUserInfo.data.data.userId}`;
  }

  const myInfoButtonHandle = () => {
    window.location.href = `http://localhost:3000/myinfo/${getUserInfo.data.data.userId}`;
  }

  const backButtonHandle = () => {
    window.location.href = "http://localhost:3000/";
  }

  if(getUserInfo.isLoading) {
    return (<div>로딩중</div>)
  }

  return (
    <div css={s.myPageContainer}>
      <div css={s.myPageTitleContainer}>
          <button css={s.backButton} onClick={backButtonHandle}>뒤로</button>
          <label css={s.myPageTitle}> 마이페이지</label>
      </div>
      <div css={s.myPageButtonContainer}>
        <button css={s.myPageButton} onClick={myBoardButtonHandle}>
          내가 쓴 글 보기
        </button>
      </div>
      <div css={s.myPageButtonContainer}>
        <button css={s.myPageButton} onClick={alreadyReadBoardButtonHandle}>
          최근에 본 게시글 목록
        </button>
      </div>
      <div css={s.myPageButtonContainer}>
        <button css={s.myPageButton} onClick={myInfoButtonHandle}>
          내 정보
        </button>
      </div>
    </div>
  );
};

export default MyPage;