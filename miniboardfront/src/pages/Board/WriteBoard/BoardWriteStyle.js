import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 800px; */
    width: 100%;
    height: 100vh;
    margin-left: 200px;
    border: 1px solid #121212;
`;

export const headerBox = css`
    width: 100%;
    height: 200px;
    /* margin-top: 100px; */
`;

export const headerTitle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 200px;
    height: 150px;
    font-size: 30px;
    font-weight: 600;
 `;

export const mainBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 800px;
    height: 400px;
`;

export const titleInputBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    
`;

export const titleInput = css`
    width: 600px;
    height: 50px;
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

export const contentInput = css`
    width: 600px;
    min-height: 500px;
    max-height: 600px;
    resize: none;
    &:hover{
        box-shadow: 0px 0px 5px #C7BCBE;
        border: none;
    }
    
    &:focus{
        box-shadow: 0px 0px 5px 3px #C7BCBE;
        border: none;
        outline: none;
    }
    margin: 20px 0px 5px 0px;
`;

export const registerButtonBox = css`
    display: flex;
    justify-content: flex-end;

    width: 605px;
    height: 30px;
    margin-top: 20px;
`;

export const registerButton = css`
    border: 1px solid #121212;
    background-color: #ECEAFD;
    border: 1px solid #121212;
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
export const errorMessages = css`
    font-size: 15px;
    color: red;
`;