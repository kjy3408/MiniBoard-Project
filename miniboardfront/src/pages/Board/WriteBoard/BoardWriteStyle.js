import { css } from "@emotion/react";

export const writeBoardContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: 550px;
    background-color: #f9ebee;
    border-radius: 25px;
border: 1px solid #121212;
`;

export const headerContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 100px;
`;

export const text = css`
    font-size: 30px;
    font-weight: 600;
 `;

export const mainConatiner = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 800px;
    height: 400px;
`;

export const titleContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 700px;
    height: 60px;
    
`;

export const titleInput = css`
    width: 600px;
    height: 30px;
    border: none;
    border-radius: 5px;
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
    height: 300px;
    border: none;
    border-radius: 5px;
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

export const registerButtonContainer = css`
    display: flex;
    justify-content: flex-end;

    width: 605px;
    height: 30px;
    margin-top: 20px;
`;

export const registerButton = css`
    border-radius: 5px;
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