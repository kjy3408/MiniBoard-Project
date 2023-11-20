import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 200px;
    width: 100%;
    height: 100vh;
`;

export const myInfoTitleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100px;
    border: 1px solid black;
`;

export const backButton = css`
    position: absolute;
    top: 30px;
    left: 450px;
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

export const myInfoTitle = css`
    font-size: 30px;
    font-weight: 600;
`;

export const mainBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
border: 1px solid black;
`;

export const profileBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border: 1px solid black;
`;

export const infoContainer = css`
    display: flex;
`;

export const infoLabelContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100px;
    height: 30px;
    margin: 10px 0px 0px 10px;
`;

export const infoLabel = css`
    font-size: 14px;
    font-weight: 600;
`;

export const changePasswordButton = css`
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

export const infoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100px;
    height: 30px;
    margin: 10px 0px 0px 10px;
    
`;


export const buttonComment = css`
    font-size: 14px;
    color: red;
`;

export const passwordContainer = css`
    display: flex;
`;

export const boardInfoTitleContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 30px;
    font-weight: 600;
    width: 500px;
    height: 100px;
    border-top: 1px solid #dbdbdb;
`;

export const countButton = css`
    background-color: #ECEAFD;
    border: 1px solid #121212;
    border-radius: 5px;
    color: #0c3934;
    width: 80px;
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

export const modalTitle = css`
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

export const errorMessage = css`
    color: red;
    font-size: 12px;
    margin-bottom: 10px;
`;