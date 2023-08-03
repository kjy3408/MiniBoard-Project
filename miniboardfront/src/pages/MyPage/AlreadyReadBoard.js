/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import * as s from './AlreadyReadBoardStyle';

const AlreadyReadBoard = () => {
    const [ getAlreadyReadBoardsFlag, setGetAlreadyReadBoardsFlag ] = useState(true);
    const [modifyBoardEditedFlag, setModifyBoardEditedFlag] = useState(false);

    const { userId } = useParams();

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
            for(let i = 0; i < response.data.length; i++){
                if(response.data[i].boardModifyFlag){
                  setModifyBoardEditedFlag(prevState => ({...prevState, [response.data[i].readId]: true}))
                  console.log(modifyBoardEditedFlag)
                }
            }
            return response
        }, {
            enabled: getAlreadyReadBoardsFlag,
            onSuccess: () => {
                setGetAlreadyReadBoardsFlag(false);
            }
        })

        
    const readBoardHandle = (boardId) => {
        window.location.href = `/mini/board/${boardId}`;
     
    }
    return (
        <div css={s.alreadyBoardContainer}>
            <div css={s.alreadyBoardTitleBox}> 
                <label css={s.alreadyBoardTitle}>최근 본 글</label>
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
                            <tr>
                                <td>Loading...</td>
                            </tr>
                        ) : getAlreadyReadBoards.data !== undefined ? (
                            getAlreadyReadBoards.data.data.map((readBoard, index) => (
                            <tr css={s.tableTR2} onClick={() => readBoardHandle(readBoard.boardId)} key={readBoard.readId}>
                                <td css={s.numberTable}>{index + 1}</td>
                                <td css={s.titleTable}>{readBoard.boardTitle}</td>
                                <td css={s.dateTable}>{readBoard.boardDate}</td>
                                <td css={s.nicknameTable}>{readBoard.registerNickname}</td>
                                <td css={s.viewsTable}>{readBoard.boardViews}</td>
                                <td css={s.readDateTable}>{readBoard.readDate}</td>
                                {modifyBoardEditedFlag[readBoard.readId] ? (
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
            </div>
        </div>
    );
};

export default AlreadyReadBoard;