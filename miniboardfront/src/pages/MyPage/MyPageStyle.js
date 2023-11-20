import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;
    border: 1px solid #121212;
`;

export const myPageTitleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    /* width: 1000px; */
    width: 100%;
    height: 200px;
`;

// export const backButton = css`
//     position: absolute;
//     top: 30px;
//     left: 150px;
//     border-radius: 7px;
//     width: 50px;
//     height: 30px;
//     border: 1px solid #121212;
//     background-color: #F3F4FB;
//     font-size: 15px;
//     border: 1px solid #121212;
//     &:hover {
//         box-shadow: 0px 0px 10px 0px #646161;
//         border: none;
//         font-weight: 600;
//     }
// `;

// export const myPageTitleBox = css`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 1100px;
//     border: 1px solid #121212;
// `;

export const myPageTitle = css`
    font-size: 30px;
    font-weight: 600;
`;

export const myPageButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    /* width: 1000px; */
    width: 100%;
    height: 100px;
    /* margin-top: 30px; */
    /* border: 1px solid #121212; */
`;

export const myPageButton = css`
    border:none;
    border-radius: 7px;
    background-color: #E0EDD4;
    font-size: 15px;
    border: 1px solid #121212;
    &:hover {
        box-shadow: 0px 0px 10px 0px #E0EDD4;
        border: none;
        font-weight: 600;
        border: 1px solid #121212;
    }

    width: 300px;
    height: 40px;
`;