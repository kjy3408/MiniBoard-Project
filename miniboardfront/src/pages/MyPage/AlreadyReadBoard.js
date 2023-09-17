/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { unstable_HistoryRouter, useNavigate, useParams } from 'react-router-dom';
import * as s from './AlreadyReadBoardStyle';

const AlreadyReadBoard = () => {
    const [ getAlreadyReadBoardsFlag, setGetAlreadyReadBoardsFlag ] = useState(true);
    const [modifyBoardEditedFlag, setModifyBoardEditedFlag] = useState(false);
    const { userId } = useParams();
    const navigate = useNavigate();

    const getAlreadyReadBoards = useQuery(["myInfoData"], async() => {
            const option = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("accessToken")}`
                },
                params: {
                    userId: userId
                }
            }
    
            const response = await axios.get("http://localhost:8080/mypage/already/read", option)
            console.log(response)
            if(response.data[0].boardId === 0 ){
                return undefined;
            }else {
                for(let i = 0; i < response.data.length; i++){
                    if(response.data[i].boardModifyFlag){
                      setModifyBoardEditedFlag(prevState => ({...prevState, [response.data[i].readId]: true}))
                      console.log(modifyBoardEditedFlag)
                    }
                }
                return response
            }
        }, {
            enabled: getAlreadyReadBoardsFlag,
            onSuccess: () => {
                setGetAlreadyReadBoardsFlag(false);
               
            }
        })

        const boardDeleteAll = useMutation(async() => {
            const option = {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("accessToken")}`
                },
                params: {
                    userId: userId
                }
            }
            try{
                await axios.delete("http://localhost:8080/mypage/already/delete/all", option)
                setGetAlreadyReadBoardsFlag(true);
            }catch(error){

            }
        })
        const deleteAllHandle = () => {
            if(window.confirm("최근 기록을 전체 삭제 하시겠습니까?")){
                boardDeleteAll.mutate()
            }
        }

        
    const readBoardHandle = (boardId) => {
        window.location.href = `/mini/board/${boardId}`;
    }

    const backButtonHandle = () => {
        navigate(-1);
    }
    return (
        <div css={s.alreadyBoardContainer}>
            <div css={s.alreadyBoardTitleBox}> 
                <button css={s.backButton} onClick={backButtonHandle}>뒤로</button>
                <label css={s.alreadyBoardTitle}>최근 본 글</label>
            </div>
            <div css={s.deleteAllButtonBox}>
                <button css={s.deleteAllButton} onClick={deleteAllHandle}>전체삭제</button>
            </div>
            <div>
                <table css={s.tableContainer}>
                    <thead css={s.thead}>
                        <tr>
                            <th>No</th>
                            <th>제목</th>
                            <th>등록일</th>
                            <th>글쓴이</th>
                            <th>조회수</th>
                            <th>읽은 날</th>
                            <th>수정 여부</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAlreadyReadBoards.isLoading ? (
                            null
                        ) : (
                            getAlreadyReadBoards.data !== undefined ? (
                                getAlreadyReadBoards.data.data.map((readBoard, index) => (
                                    <tr
                                        css={s.tableTR2}
                                        onClick={() => readBoardHandle(readBoard.boardId)}
                                        key={readBoard.readId}
                                    >
                                        <td css={s.numberTable}>{index + 1}</td>
                                        <td css={s.titleTable}>{readBoard.boardTitle}</td>
                                        <td css={s.dateTable}>{readBoard.boardDate}</td>
                                        <td css={s.nicknameTable}>{readBoard.registerNickname}</td>
                                        <td css={s.viewsTable}>{readBoard.boardViews}</td>
                                        <td css={s.readDateTable}>{readBoard.readDate}</td>
                                        {modifyBoardEditedFlag[readBoard.readId] ? (
                                            <td css={s.modifyTable}>수정됨</td>
                                        ) : (
                                            <td css={s.modifyTable}></td>
                                        )}
                                    </tr>
                                ))
                            ) : (
                                null
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AlreadyReadBoard;