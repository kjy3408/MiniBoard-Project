/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import * as s from './SIdeBarStyle';
import { useQuery } from 'react-query';
import axios from 'axios';

const SideBar = () => {
    const [ getUserInfoFlag, setGetUserInfoFlag ] = useState(true);
    const [ loginFlag, setLoginFlag ] = useState(false);


    useEffect(() => {
        checkLogin();
    })

    const checkLogin = () => {
        if(!!localStorage.getItem("accessToken")) {
            setLoginFlag(true);
            //로그인OK
        }else{
            console.log("로그인?")
            setLoginFlag(false)
            //로그인NO
        }
    }

    const getUserInfo = useQuery(["getUserInfo"], async() => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }
        }
        const response = await axios.get("http://localhost:8080/main/userinfo", option)
        
        return response;
    },{
        enabled: getUserInfoFlag && loginFlag,
        onSuccess: () => {
            setGetUserInfoFlag(false);
        }
    })

    const loginButtonHandle = () => {
        window.location.href = "http://localhost:3000/auth/login"
    }

    const myPageButtonHandle = () => {
        window.location.href = `http://localhost:3000/mypage/${getUserInfo.data.data.userId}`;
    }

    const mainPageButtonHandle = () => {
        window.location.href = "http://localhost:3000/"
    }

    const logOutButtonHandle = () => {
        if(window.confirm("로그아웃 하시겠습니까?")){
            localStorage.removeItem("accessToken");
            window.location.reload();
        }
    }

    return (
        <div className="sideBarContainer" css={s.sideBarContainer}>
            {loginFlag ? (
                <>
                    <div css={s.nicknameContainer}>
                        {getUserInfo.isLoading ? "로딩중" : getUserInfo.data !== undefined ? (<label css={s.nickname}>{"현재 로그인 : " + getUserInfo.data.data.nickname}</label>) : "로딩중"}
                    </div>
                    <div css={s.sideBarButtonContainer}>
                        <button css={s.myPageButton} onClick={myPageButtonHandle}>
                            마이페이지
                        </button>
                    </div>
                    <div css={s.sideBarButtonContainer}>
                        <button css={s.sideBarButton} onClick={mainPageButtonHandle}>메인페이지</button>
                    </div>
                    <div css={s.sideBarButtonContainer}>
                        <button css={s.sideBarButton} onClick={logOutButtonHandle}>로그아웃</button>
                    </div>
                </>
            ) : (
                <>
                    <div css={s.sideBarButtonContainer}>
                        <button css={s.sideBarButton} onClick={loginButtonHandle}>로그인</button>
                    </div>
                    <div css={s.sideBarButtonContainer}>
                        <button css={s.sideBarButton} onClick={mainPageButtonHandle}>메인페이지</button>
                    </div>
                </>
            )}
          
        </div>
    );
};

export default SideBar;