import { css } from "@emotion/react";

export const myPageContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 1000px;
    height: 450px;

    
    background-color: #f9ebee;
    border-radius: 25px;
    border: 1px solid #121212;
`;

export const myPageTitleContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 1000px;
    height: 100px;
`;

export const myPageTitle = css`
    font-size: 30px;
    font-weight: 600;
`;

export const myPageButtonContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 1000px;
    height: 70px;
    margin-top: 30px;
    /* border: 1px solid #121212; */
`;

export const myPageButton = css`
    border:none;
    border-radius: 7px;
    background-color: #F3F4FB;
    font-size: 15px;
    border: 1px solid #121212;
    &:hover {
        box-shadow: 0px 0px 10px 0px #646161;
        border: none;
        font-weight: 600;
    }

    width: 300px;
    height: 40px;
`;