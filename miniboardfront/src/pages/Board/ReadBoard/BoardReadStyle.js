import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin-left: 200px;
    border-radius: 25px;
`;

export const headerBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 300px;
    /* background-color: #E0EDD4; */
    border: 1px solid black;
    border-bottom: none;
`;

export const backButtonBox = css`
    width: 100%;
    margin-bottom: 20px;
`;

export const backButton = css`
    border-radius: 7px;
    width: 50px;
    height: 30px;
    border: 1px solid #121212;
    background-color: #F3F4FB;
    font-size: 15px;
    border: 1px solid #121212;
    &:hover {
        box-shadow: 0px 0px 10px 0px #646161;
        border: none;
        font-weight: 600;
    }
`;

export const boardTitle = css`
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    width: 100%;
    height: 80px;
`;

export const iconAndUserInfoAndDateBox = css`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
`;
export const userIcon = css`
    width: 10%;
    height: 100%;
    border: 1px solid black;
`;
export const userInfoAndDateBox = css`
position: relative;
    display: flex;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const userInfoBox = css`
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 100%;
    height: 100%;
`;

export const userInfo = css`
    font-size: 20px;
    font-weight: 600;
`;

export const uploadDateBox = css`
    margin-left: 10px;
    width: 70%;
    display: flex;
    align-items: end;
    height: 30px;
`;

export const uploadDate = css`
    font-size: 14px;
    color: darkgray;
`;

export const likeButton = css`
    position: absolute;
    right: 20px;
    font-size: 30px;
    border: none;
    background-color: white;
    &:active{
        font-size: 25px;
    }
`;

export const mainBox = css`
    width: 70%;
    min-height: 500px;
    overflow: auto;
    border: 1px solid #121212;
`;

export const boardContentBox = css`
    padding: 30px;
`;

export const boardContent = css`
    font-size: 14px;
    line-height: 18px;
`;

export const footerBox = css`
    width: 100%;
`;

export const addCommentBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 70%;
    height: 100px;
`;

export const commentTextarea = css`
    width: 700px;
    height: 75px;
    background-color: #fafafa;
    border-radius: 7px;
    resize: none;
    padding: 10px;
`;

export const commentButton = css`
    width: 80px;
    height: 75px;
    border-radius: 5px;
    background-color: #D7F0B6;
    border: 1px solid #121212;

    &:hover {
        background-color: #C7BCBE;
        color: #312F2F;
        border: none;
        box-shadow: 0px 0px 8px #646161;
        font-weight: 600;
        cursor: pointer;
    }

    &:active {
        background-color: #e5e8dc;
    }
`;

export const commentBox = css`
    width: 770px;
    margin: auto;
    padding: 10px;
    /* border: 1px solid black; */
`;

export const comment = css`
    position: relative;
    width: 750px;
    padding: 10px;
    margin: 0px 0px 20px 0px;
    border-radius: 5px;
    border: 1px solid #121212;
    background-color: #e5e8dc;
`;

export const commentDetail = css`
    font-size: 13px;
    line-height: 15px;
`;

export const commentDate = css`
    width: 730px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
`;

export const nicknameFontSize = css`
    font-size: 14px;
    font-weight: 600;
`;

export const dateFontSize = css`
    font-size: 14px;
`;

export const commentText = css`
    width: 708px;
    margin: auto;
    padding: 10px;
`;

export const buttonContainer = css`
    display: flex;
    justify-content: flex-end;
    width: 200px;
    height: 20px;
`;

export const commnetDeleteAndModifyButton = (buttonFlag) => css`
    width: 50px;
    justify-content: center;
    align-items: center;
    margin: 2px 0px 0px 2px;
    display: ${buttonFlag ? "flex" : "none"};
    height: 20px;
    border: 1px solid #121212;
    border-radius: 5px;
    background-color: #ECEAFD;
    
    &:hover {
        font-weight: 600;
     }

     &:active {
        background-color: #dbdbdb;
     }
`;

export const recommentButton = css`
    width: 80px;
    height: 20px;
    justify-content: center;
    align-items: center;
    margin: 2px 0px 0px 2px;
    border: 1px solid #121212;
    border-radius: 5px;
    background-color: #ECEAFD;
    
    &:hover {
        font-weight: 600;
     }

     &:active {
        background-color: #dbdbdb;
     }
`;

export const modifyCommentContainer = css`
    width: 1000px;
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
    border-radius: 7px;
    margin: auto;
    margin-bottom: 5px;
`;

export const modifyOkAndCancelContainer = css`
    width: 715px;
    display: flex;
    justify-content: flex-end;
`;

export const modifyOkAndCancelButton = css`
    width: 100px;
    font-size: 13px;
    border: 1px solid #121212;
    border-radius: 5px;
    background-color: #ECEAFD;
    
    &:hover {
        font-weight: 600;
    }

`;

export const rplyCommentContainer = css`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 750px;
`;

export const replyCommentInputAndButtonBox = css`
    display: flex;
    width: 730px;
`;

export const replyCommentTextarea = css`
    width: 630px;
    height: 75px;
    margin: 10px 0px 0px 5px;
    background-color: #fafafa;
    resize: none;
    border: 1px solid #dbdbdb;
    border-radius: 7px;
`;

export const registerReplyCommentButton = css`
    width: 80px;
    height: 74px;
    margin: 10px 0px 0px 5px;
    border: 1px solid #121212;
    border-radius: 5px;
    background-color: #ECEAFD;
`;

export const replyCommentData = css`
    display: flex;
    flex-direction: column;
    margin: 10px auto 0px auto;
    width: 600px;
    border: 1px solid #dbdbdb;
    border-radius: 7px;
    background-color: #eee9dc;
border: 1px solid #121212;
`;

export const replyCommentDetail = css`
    font-size: 12px;
    line-height: 14px;
`;

export const replyNickname = css`
    font-size: 16px;
    font-weight: 600;
`;

export const replyDate = css`
    width: 600px;
    padding: 10px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
`;

export const replyCommentDeleteButton  = (buttonFlag) => css`
    font-size: 10px;
    display: ${buttonFlag ? "flex" : "none"};
`;

export const replyCommentBox = css`
    width: 600px;
    padding: 10px;
    font-size: 18px;
    font-weight: 600;
`;

