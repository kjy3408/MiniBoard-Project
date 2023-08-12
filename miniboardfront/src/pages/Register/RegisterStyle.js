import { css } from "@emotion/react";

export const registerContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: auto;
    border: 1px solid #121212;
    border-radius: 25px;
    background-color: #f9ebee ;
`;

export const registerTitleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    font-size: 30px;
    font-weight: 600;
`;

export const mainContainer =css`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 500px;
`;

export const registerLabel = css`
margin: 0px 0px 20px 0px;
    font-size:20px;
    font-weight: 600;
`;

export const registerInput = css`
    width: 300px;
    height: 25px;
    margin-bottom: 5px;
    border: none;
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

export const IdAndPasswordLabel = css`
    font-size: 13px;
    color: red;
`;

export const errorMessage = css`
    font-size: 12px;
    color: red;
    margin: 0px 0px 20px 0px;
`;

export const questionSelectButton = (questionButtonCheckFlag) => css`
    width: 300px;
    height: 30px;
    border: 1px solid #121212;
    background-color: #ECEAFD;
    border: 1px solid #121212;
    box-shadow: ${questionButtonCheckFlag ? "0px 0px 10px 5px red" 
                                        : "0px 0px 0px 0px"};
    font-size: ${questionButtonCheckFlag ? "16px" : ""};
    font-weight: ${questionButtonCheckFlag ? "600" : ""};

    color: #0c3934;
    margin-bottom: 20px;
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

export const questionContainer = css`
    width: 300px;
    height: 500px;

    border: 1px solid #121212;
`;

export const questionUi = css`
    width: 300px;
    margin-bottom: 5px;

    &:hover {
        font-weight: 600;
    }
`;

export const categoryLabel = css`
    font-size: 14px;
`;

export const questionBox = css`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const answerBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const questionErrorMessage = css`
    font-size: 14px;
    color: red;

    margin: 0px 0px 5px 0px;
`;

export const answerErrorMessage = css`
    font-size: 12px;
    color: red;

    margin: 20px 0px 5px 0px;
`;

export const answerInput = css`
     width: 300px;
    height: 25px;
    margin-bottom: 5px;
    border: none;
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

export const registerAndLoginButton = css`
    background-color: #ECEAFD;
    border: 1px solid #121212;
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