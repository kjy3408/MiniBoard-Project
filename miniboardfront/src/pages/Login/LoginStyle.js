import { css } from "@emotion/react";

export const loginContainer =css`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */

    width: 500px;
    height: 450px;
    border: 1px solid #121212;
    border-radius: 25px;
    background-color: #f9ebee ;
`;

export const headerBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 100px;
    margin-bottom: 50px;
    /* border: 1px solid #121212; */
`;

export const loginTitle = css`
    color: #121212;
    font-size: 30px;
    font-weight: 600;
`;

export const mainContainer =css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const loginLabel = css`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
`;

export const loginInput = css`
    width: 300px;
    height: 30px;
    border: none;
    /* border-bottom: 2px solid #0c3934; */
    /* box-shadow: 0px 3px 4px 0px #C7BCBE; */
    border-radius: 4px;
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

export const usernameErrorMessage = css`
    font-size: 14px;
    color: red;

    margin: 5px 0px 30px 0px;
`;

export const passwordErrorMessage = css`
    font-size: 14px;
    color: red;
    margin: 5px 0px 20px 0px;
`;

export const loginButton = css`
    width: 300px;
    border-radius: 5px;
    /* font-size: 15px; */
    border: 1px solid #121212;
    background-color: #ECEAFD;
    border: 1px solid #121212;
    color: #0c3934;
    margin-bottom: 25px;

    &:hover {
        background-color: #C7BCBE;
        color: #312F2F;
        border: none;
        box-shadow: 0px 0px 8px #646161;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
    }

    &:active {
        background-color: #e5e8dc;
    }

`;
export const findIdAndPasswordContainer = css`
    display: flex;
    width: 300px;
    /* border: 1px solid #121212; */
`;

export const findIdAndPasswordBox = css`
    width: 160px;
`;

export const findIdAndPasswordButton = css`
    border: none;
    background-color: #f9ebee;
    color: blue;
    font-size: 14px;
    border-radius: 4px;
    &:hover {
        color: blue;
        font-weight: 600;
        font-size: 15px;
    }
`;

export const registerBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
`;

export const registerButton = css`
    width: 150px;
    border-radius: 5px;
    font-size: 14px;
    border: none;
    background-color: #f9ebee;
    color: blue;
    &:hover {
        color: blue;
        font-weight: 600;
        font-size: 15px;
    }
`;
