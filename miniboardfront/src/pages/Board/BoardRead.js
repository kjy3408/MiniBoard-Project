import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const BoardRead = () => {
    const [ getBoardFlag, setGetBoardFlag ] = useState(true);
    const { boardId } = useParams();

    const getBoard = useQuery(["getBoard"], async() => {
        const option = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            params: {
                boardId: boardId
            }
        }
        const response = await axios.get("http://localhost:8080/read/board", option)
        console.log(response);
    }, {
        enabled: getBoardFlag,
        onSuccess: () => {
            setGetBoardFlag(false);
        }
    })

    if(getBoard.isLoading){
        return <div>로딩중</div>
    }
    return (
        <div>
            <header>
                <div>
                    {/* {getBoard.data.data.board_title} */}
                </div>
            </header>
            <main>
                <div>
                    내용
                </div>
            </main>
            <footer>
                댓글
            </footer>
        </div>
    );
};

export default BoardRead;