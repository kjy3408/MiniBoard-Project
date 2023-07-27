import { css } from "@emotion/react";

export const BoardReadContainer = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 1200px;
    /* height: 830px; */
`;

export const headerContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 60px;

    width: 800px;
    height: 100px;
    border: 1px solid #121212;
    `;

export const boardTitle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
`;

export const mainContainer = css`
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    width: 800px;
    height: 500px;
    overflow: auto;
    border: 1px solid #121212;
    `;

export const boardContent = css`
    padding: 30px;
`;

export const footerContainer = css`
    /* display: flex; */
    
    width: 800px;
    /* height: 800px; */
    /* border: 1px solid #121212; */
`;

export const addCommentContainer = css`
    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    width: 800px;
    height: 100px;
    /* border: 2px solid #121212; */
`;

export const commentTextarea = css`
    width: 700px;
    height: 75px;
    margin: 10px 0px 0px 5px;
    background-color: #fafafa;
    resize: none;
    border: 1px solid #dbdbdb;
`;

export const commentButton = css`
    width: 80px;
    height: 80px;
    /* margin: 10px 7px 0px 0px; */
    margin: auto;
`;

export const comentContainer = css`
    width: 770px;
    height: 500px;
    margin: auto;
    padding: 10px;
    /* border: 1px solid #121212; */
`;

export const comment = css`
    width: 730px;
    height: 110px;
    padding: 10px;
    margin: auto;
    /* border: 1px solid #121212; */
`;

export const commentText = css`
    width: 708px;
    height: 80px;
    margin: auto;
    padding: 10px;
    background-color: #fafafa;
    border:1px solid #dbdbdb;
`;

export const buttonContainer = css`
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: flex-end;
    /* align-items: center; */
    width: 730px;
    height: 20px;
    margin: auto;
`;

export const commnetDeleteAndModifyButton = (buttonFlag) => css`
    width: 100px;
    margin: 2px 0px 0px 2px;
    display: ${buttonFlag ? "flex" : "none"};

    border: 1px solid #dbdbdb;
    background-color: #fafafa;
    
    &:hover {
        font-weight: 600;
     }

     &:active {
        background-color: #dbdbdb;
     }
`;