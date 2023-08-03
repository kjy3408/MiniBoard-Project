/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import * as s from './MyInfoStyle';
import { useParams } from 'react-router-dom';

const MyInfo = () => {

    const [ getUserInfoFlag, setGetUserInfoFlag ] = useState(true);
    const [ getMyInfoDataFlag, setGetMyInfoDataFlag ] = useState(true); 
    const { userId } = useParams();

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

    const getMyInfoData = useQuery(["getMyInfoData"], async() => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
            },
            params: {
                userId: userId
            }
        }
        const response = await axios.get("http://localhost:8080/mypage/info/data", option)
        return response;
    },{
        enabled: getMyInfoDataFlag,
        onSuccess: () => {
            setGetMyInfoDataFlag(false);
        }
    })

    const myBoardsHandle = () => {
        window.location.href = `http://localhost:3000/myboard/${userId}`;
 
    }

    const readBoardCountHandle = () => {
        window.location.href = `http://localhost:3000/already/read/${getUserInfo.data.data.userId}`;
    }

    if(getUserInfo.isLoading || getMyInfoData.isLoading) {
        return (<div>로딩중</div>)
    }
        return (
            <div css={s.myInfoContainer}>
                <div css={s.myInfoTitleContainer}>
                    <label css={s.myInfoTitle}>
                        내 정보
                    </label>
                </div>
                <div css={s.myInfoDataContainer}>
                    <div css={s.infoContainer}>
                        <div css={s.infoLabelContainer}>
                            <label css={s.infoLabel}>
                                아이디
                            </label>
                        </div>
                        <div css={s.infoBox} >
                            <label css={s.infoLabel}>
                                {getUserInfo.data.data.username}
                            </label>
                        </div>
                    </div>
                    <div css={s.infoContainer}>
                        <div css={s.infoLabelContainer}>
                            <label css={s.infoLabel}>
                                비밀번호
                            </label>
                        </div>
                        <div css={s.infoBox} >
                            <label css={s.infoLabel}>
                                <button>비밀번호 번경</button>
                            </label>
                        </div>
                    </div>
                    <div css={s.infoContainer}>
                        <div css={s.infoLabelContainer}>
                            <label css={s.infoLabel}>
                                닉네임
                            </label>
                        </div>
                        <div css={s.infoBox} >
                            <label css={s.infoLabel}>
                                {getUserInfo.data.data.nickname}
                            </label>
                        </div>
                    </div>
                    <div css={s.boardInfoTitleContainer}>
                        게시글 정보
                    </div>
                    <div css={s.infoContainer}>
                        <div css={s.infoLabelContainer}>
                            <label css={s.infoLabel}>내가 쓴 글</label>
                        </div>
                        <div css={s.infoBox} >
                            <button css={s.countButton} onClick={myBoardsHandle}>
                                {getMyInfoData.data.data[0].registerBoardCount}
                            </button>
                            <label css={s.buttonComment}>
                                (클릭 시 이동)
                            </label>
                        </div>
                    </div>
                    <div css={s.infoContainer}>
                        <div css={s.infoLabelContainer}>
                            <label css={s.infoLabel}>
                                내가 본 게시글
                            </label>
                        </div>
                        <div css={s.infoBox} >
                            <button css={s.countButton} onClick={readBoardCountHandle}>
                                {getMyInfoData.data.data[1].readBoardCount}
                            </button>
                            <label css={s.buttonComment}>
                                (클릭 시 이동)
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default MyInfo;