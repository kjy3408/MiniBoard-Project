import { css } from "@emotion/react";
import { alreadyBoardContainer } from './../MyPage/AlreadyReadBoardStyle';

export const registerContainer = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 500px;
    /* height: 550px; */
    margin: auto;
    border: 1px solid #121212;
    `;

export const registerTitleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 80px;
    margin-bottom: 50px;
    /* border: 1px solid #121212; */
    font-size: 30px;
    font-weight: 600;
`;

export const mainContainer =css`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 500px;
    /* height: 400px; */
    /* border: 1px solid #121212; */
`;

export const registerLabel = css`
margin: 0px 0px 20px 0px;
    font-size:20px;
    /* height: 50px; */
    font-weight: 600;
`;

export const errorMessage = css`
font-size: 14px;
    color: red;
    margin: 0px 0px 50px 0px;
`;

export const questionSelectButton = css`
    width: 200px;
    height: 50px;

    margin-bottom: 20px;
`;

export const questionContainer = css`
    width: 300px;
    height: 500px;

    border: 1px solid #121212;
`;

export const questionUi = css`
    width: 300px;
    /* border: 1px solid #121212; */
    margin-bottom: 5px;

    &:hover {
        font-weight: 600;
    }
`;

export const categoryLabel = css`
    font-size: 14px;
`;

export const questionBox = css`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* border: 2px solid #121212; */
`;

export const answerBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* border: 1px solid blue; */
`;

export const questionErrorMessage = css`
    font-size: 14px;
    color: red;

    margin: 0px 0px 5px 0px;
`;

export const answerErrorMessage = css`
    font-size: 14px;
    color: red;

    margin: 20px 0px 5px 0px;
`;

export const answerInput = css`
    width: 400px;
    height: 30px;
`;