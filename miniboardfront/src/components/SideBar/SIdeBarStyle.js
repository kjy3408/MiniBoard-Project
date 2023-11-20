import { css } from "@emotion/react";

export const sideBarContainer = css`
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0;
    /* z-index: 999; */
    /* transition: left 0.5s ease-out; */
    display: flex;
    flex-direction: column;
    background-color: #dedeed;
    .myPageMenu {
        display: none;
    }
    
    &:hover {
        cursor: pointer;
        left: 0;
    }
`;

export const nicknameContainer = css`
    width: 200px;
    height: 30px;

    margin: 20px auto;
    /* border: 1px solid #121212; */
    `;

export const nickname = css`

    font-weight: 600;
`;

export const sideBarButtonContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 200px;
    height: 80px;
   /* border-right: 1px solid #; */
    `;

export const myPageButton = css`
    width: 200px;
    height: 60px;
    border:none;
    /* border-bottom: 2px solid #dbdbdb; */
    background-color: #F1F1F7;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        
        font-weight: 600;
        font-size: 17px;
        transition: 0.3s;
        background-color: #EDDEDE;    
        
        box-shadow: 0px 0px 10px 0px #121212;
    }

`;

export const sideBarButton = css`
    width: 200px;
    height: 60px;
    border:none;
    border-bottom: 2px solid #dbdbdb;
    background-color: #F1F1F7;
    border-radius: 10px;
    
    &:hover {
        cursor: pointer;
        
        font-weight: 600;
        font-size: 17px;
        transition: 0.3s;
        background-color: #EDDEDE;
        box-shadow: 0px 0px 10px 0px #121212;
    }
`;
