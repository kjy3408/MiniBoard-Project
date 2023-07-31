/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import * as s from './SIdeBarStyle';
import { useQuery } from 'react-query';
import axios from 'axios';

const SideBar = () => {
    const [ getUserInfoFlag, setGetUserInfoFlag ] = useState(true);

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

    const myPageButtonHandle = () => {
        window.location.href = `http://localhost:3000/mypage/${getUserInfo.data.data.userId}`;
    }

    const mainPageButtonHandle = () => {
        window.location.href = "http://localhost:3000/"
    }

    if(getUserInfo.isLoading){
        return <div>로딩중</div>
    }
    
    console.log(getUserInfo.data.data.nickname)
    return (
        <div css={s.sideBarContainer}>
            <div css={s.nicknameContainer}>
                {getUserInfo.isLoading ? "로딩중" : getUserInfo.data !== undefined ? (<label css={s.nickname}>{"현재 로그인 : " + getUserInfo.data.data.nickname}</label>) : "로딩중"}
            </div>
            <div css={s.sideBarButtonContainer}>
                <button css={s.sideBarButton} onClick={myPageButtonHandle}>마이페이지</button>
            </div>
            <div css={s.sideBarButtonContainer}>
                <button css={s.sideBarButton} onClick={mainPageButtonHandle}>메인페이지</button>
            </div>
        </div>
    );
};

export default SideBar;