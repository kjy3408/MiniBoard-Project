import { css } from "@emotion/react";

export const findUserInfoContainer = css`
    display: flex;
    width: 350px;
    height: 550px;
    
    border-radius: 25px;
    background-color: #f9ebee ;

border: 1px solid #121212;
`;

export const findUsernameBox = css`
    width: 350px;
    height: 500px;
`;

export const findUsernameTitleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 100px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
`;

export const findPasswordBox = css`
    display: flex;
    flex-direction: column;
    width: 350px;
    /* height: 500px; */

`;

export const questionBox = css`
    display: flex;
    flex-direction: column;

    width: 350px;
    height: 200px;
    font-size: 15px;
`;

export const questionUl = css`
     &:hover {
        font-weight: 600;
    }
`;

export const findUsernameAnswerBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
`;

export const answerInput = css`
    width: 250px;
    height: 25px;
    &:hover{
        box-shadow: 0px 0px 5px #C7BCBE;
        border: none;
    }
    &:focus{
        box-shadow: 0px 0px 5px 3px #C7BCBE;
        border: none;
        outline: none;
    }
`;

export const findUsernameButton = css`
    background-color: #ECEAFD;
    border: 1px solid #121212;
    border-radius: 3px;
    color: #0c3934;
    height: 25px;
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


export const findPasswordButton = css`
    background-color: #ECEAFD;
    border: 1px solid #121212;
    border-radius: 5px;
    color: #0c3934;
    height: 25px;
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


export const resultBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 80px;
    font-weight: 600;
    font-size: 25px;
    color: green;
`;


export const errorResultBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 80px;
    color: red;
    font-size: 14px;
`;


export const findPasswordTitle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 100px;
    font-size: 20px;
    font-weight: 600;
`;

export const usernameInputBox = css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 350px;
    height: 20px;
    /* border:1px solid #121212; */
`;

export const usernameInput = css`
    width: 250px;
    height: 25px;

    margin-bottom: 5px;
    &:hover{
        box-shadow: 0px 0px 5px #C7BCBE;
        border: none;
    }
    
    &:focus{
        box-shadow: 0px 0px 5px 3px #C7BCBE;
        border: none;
        outline: none;
    }
`;

export const findPasswordAnswerBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 50px;

    border: 1px solid #121212;
`;


export const momdalContainer = css`
    width: 400px;
    height: 600px;

`;

export const modalBackDrop = (modalOpen) => css`
  z-index: 999;
  position: fixed;
  display : ${modalOpen ? "flex" : "none"};
  justify-content : center;
  align-items : center;
  background-color: rgba(0,0,0,0.7);
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
`;

export const modalBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #f9ebee;
    width: 400px;
    height: 300px;
    z-index: 4;
    border: 1px solid #121212;
    border-radius: 25px;
    `;
export const modalTitleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 300px;
    height: 100px;
`;

export const modalTitle= (buttonOpen) => css`
    display: ${buttonOpen ? "flex" : "none"};
    font-size: 30px;
    font-weight: 600;
`;

export const modalInputBox = css`
    display: flex;

    flex-direction: column;
    align-items: center;
`;

export const modalInput = css`
    width: 250px;
    height: 30px;
    &:hover{
        box-shadow: 0px 0px 5px #C7BCBE;
        border: none;
    }
    
    &:focus{
        box-shadow: 0px 0px 5px 3px #C7BCBE;
        border: none;
        outline: none;
    }
`;

export const modalButtonBox = css`
    display: flex;
    justify-content: flex-end;
    margin: 15px 0px 0px 0px;
    width: 250px;
`;

export const modalChangePasswordButton = css`
    width: 80px;
    margin-left: 10px;
    
    background-color: #ECEAFD;
    border: 1px solid #121212;
    border-radius: 5px;
    color: #0c3934;
    
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
export const changePasswordButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    width: 300px;
border: 1px solidz #121212;
`;

export const changePasswordButton = (buttonOpen) => css`
    display: ${buttonOpen ? "flex" : "none"};
    
    background-color: #ECEAFD;
    border: 1px solid #121212;
    border-radius: 5px;
    color: #0c3934;
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
export const errorMessageBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px auto 0px auto;
    width: 200px;
    height: 30px;
`;
export const errorMessage = css`
    color: red;
    font-size: 12px;
    margin-bottom: 10px;
`;

export const usernameResultBox = css`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 50px;
`;

export const findPasswordButtonBox = css`
    width: 300px;
    height: 40px;
    margin: 20px 0px 0px 30px;
    `;

export const findUsernameButtonBox = css`
    width: 300px;
    margin: 50px 0px 0px 30px;
`;


