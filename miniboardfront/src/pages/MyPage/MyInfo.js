/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as s from './MyInfoStyle';

const MyInfo = () => {

    const [ getUserInfoFlag, setGetUserInfoFlag ] = useState(true);
    const [ getMyInfoDataFlag, setGetMyInfoDataFlag ] = useState(true); 
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ password, setPassword ] = useState({userId: "",oldPassword: "", newPassword: "", checkPassword: ""});
    const [ errorMessages, setErrorMessages ] = useState({oldPassword: "", newPassword: "", checkPassword: ""})
    const { userId } = useParams();

    const changePasswordOnChangeHandle = (e) => {

        const { name, value } = e.target;
        setPassword({...password, [name]: value, userId: userId});
        console.log(password)
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

    const changePassword = useMutation(async() => {
        const option = {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type" : "application/json"
            }
        }
        try{
            await axios.put("http://localhost:8080/auth/updatepassword", JSON.stringify(password), option)
            alert("비밀번호 변경 완료")
            localStorage.removeItem("accessToken")
            window.location.replace("http://localhost:3000/auth/login")
            setModalOpen(false);
        }catch(error){
            console.log(error.response.data.errorData)
            setErrorMessages({oldPassword: error.response.data.errorData.oldPassword, 
                            newPassword: error.response.data.errorData.newPassword,
                            checkPassword: error.response.data.errorData.checkPassword})
        }
    })

    const changePasswordModalOpenButton = () => {
        setModalOpen(!modalOpen)
        setPassword({oldPassword: "", newPassword: "", checkPassword: ""})
        setErrorMessages({oldPassword: "", newPassword: "", checkPassword: ""})
    }

    const changePasswordButtonHandle = () => {
        if(window.confirm("비밀번호를 변경 하시겠습니까?")){
            changePassword.mutate()
            
        }
    }
    
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
                                <div css={s.modalBackDrop(modalOpen)}>
                                    <div css={s.modalBox}>
                                        <div css={s.modalTitleBox}>
                                            <label css={s.modalTitle}>비밀번호 변경</label>
                                        </div>
                                        <div css={s.modalInputBox}>
                                            <input css={s.modalInput} type="password" placeholder='현재 비밀번호' onChange={changePasswordOnChangeHandle} value={password.oldPassword} name='oldPassword'/>
                                            <label css={s.errorMessage}>
                                                {errorMessages.oldPassword}
                                            </label>
                                            <input css={s.modalInput} type="password" placeholder='새 비밀번호' onChange={changePasswordOnChangeHandle} value={password.newPassword} name='newPassword'/>
                                            <label css={s.errorMessage}>
                                                {errorMessages.newPassword}
                                            </label>
                                            <input css={s.modalInput} type="password" placeholder='새 비밀번호 확인' onChange={changePasswordOnChangeHandle} value={password.checkPassword} name='checkPassword'/>
                                            <label css={s.errorMessage}>
                                                {errorMessages.checkPassword}
                                            </label>
                                        </div>
                                        <div css={s.modalButtonBox}>
                                            <button css={s.modalChangePasswordButton} onClick={changePasswordButtonHandle}>변경하기</button>
                                            <button css={s.modalChangePasswordButton} onClick={changePasswordModalOpenButton}>취소</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button css={s.changePasswordButton} onClick={changePasswordModalOpenButton}>비밀번호 번경</button>
                                </div>
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
                        <div css={s.infoBox} onClick={myBoardsHandle}>
                            <button css={s.countButton} >
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