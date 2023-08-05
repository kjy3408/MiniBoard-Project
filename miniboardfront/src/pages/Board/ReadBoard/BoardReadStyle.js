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

    margin-top: 60px;
    padding: 30px;
    overflow: auto; 

    width: 800px;
    /* height: 100px; */
    border: 1px solid #121212;
    `;

export const boardTitle = css`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
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
    /* height: 500px; */
    margin: auto;
    padding: 10px;
    /* border: 1px solid #121212; */
`;

export const comment = css`
    position: relative;

    width: 750px;
    /* height: 110px; */
    padding: 10px;
    /* margin: 0px auto auto 20px; */
    margin: 0px 0px 20px 0px;
    background-color: #fafafa;
    border:1px solid #dbdbdb;
    border: 1px solid #121212;
    &:hover {
        position: relative;
}

    `;

export const commentDate = css`
    width: 730px;
    /* height: 20px; */
    display: flex;
    justify-content: space-between;
    /* font-size: 16px; */
    /* border: 1px solid #121212; */
`;

export const commentNickname = css`
    width: 120px;
    font-weight: 600;
    /* font-size: 20px; */
`;

export const nicknameFontSize = css`
    font-size: 18px;
    font-weight: 600;
`;

export const dateFontSize = css`
    font-size: 15px;
`;

export const commentText = css`
    width: 708px;
    height: 80px;
    margin: auto;
    padding: 10px;
`;

export const buttonContainer = css`
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: flex-end;
    /* align-items: center; */
    width: 200px;
    height: 20px;
/* border: 1px solid #121212; */
`;

export const commnetDeleteAndModifyButton = (buttonFlag) => css`
    width: 50px;
    justify-content: center;
    align-items: center;
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

export const recommentButton = css`
    width: 80px;
    justify-content: center;
    align-items: center;
    margin: 2px 0px 0px 2px;

    border: 1px solid #dbdbdb;
    
    background-color: #fafafa;
    
    &:hover {
        font-weight: 600;
     }

     &:active {
        background-color: #dbdbdb;
     }
`;

export const modifyCommentContainer = css`
    width: 1200px;
    height: 800px;
    background-color: #fafafa;
    margin: auto;
 border: 1px solid #121212;
`;

export const modifyCommentTextarea = css`
    width: 715px;
    height: 60px;
    margin: 10px 0px 0px 5px;
    background-color: #fafafa;
    resize: none;
    border: 1px solid #dbdbdb;
`;

export const modifyOkAndCancelContainer = css`
    width: 725px;

    display: flex;
    justify-content: flex-end;
`;

export const modifyOkAndCancelButton = css`
    width: 100px;
    /* height: 20px; */
    font-size: 13px;
`;

export const rplyCommentContainer = css`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 750px;
`;

export const replyCommentInputAndButtonBox = css`
    width: 730px;
    display: flex;
`;

export const replyCommentTextarea = css`
    width: 630px;
    height: 75px;
    margin: 10px 0px 0px 5px;
    background-color: #fafafa;
    resize: none;
    border: 1px solid #dbdbdb;
`;

export const registerReplyCommentButton = css`
    width: 80px;
    height: 74px;
    margin: 10px 0px 0px 5px;
`;

export const replyCommentData = css`
    display: flex;
    flex-direction: column;
    margin: 10px auto 0px auto;
    width: 600px;
    /* height: 80px; */
border: 1px solid #dbdbdb;
`;

export const replyNickname = css`
    font-size: 16px;
    font-weight: 600;
`;

export const replyDate = css`
    width: 600px;
    /* height: 40px; */
    padding: 10px;
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    
    /* border: 2px solid #121212; */
`;

export const replyCommentDeleteButton  = (buttonFlag) => css`
    font-size: 10px;
    display: ${buttonFlag ? "flex" : "none"};
`;

export const replyCommentBox = css`
    width: 600px;
    /* height: 60px; */
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
    /* border: 2px solid #dbdbdb; */
`;

