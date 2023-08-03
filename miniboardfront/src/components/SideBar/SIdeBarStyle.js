import { css } from "@emotion/react";
import { addCommentContainer } from './../../pages/Board/ReadBoard/BoardReadStyle';

export const sideBarContainer = css`
    width: 300px;
    height: 100%;
    /* position: absolute; */
    position: fixed;
    top: 0px;
    left: -270px;
    z-index: 999;
    /* border: 1px solid #121212; */
    transition: left 0.5s ease-out;
    display: flex;
    flex-direction: column;
    background-color: #dbdbdb;
    .myPageMenu {
        display: none;
    }
    
    &:hover {
        cursor: pointer;
        left: 0;
    }
`;

export const nicknameContainer = css`
    width: 300px;
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
    width: 300px;
    height: 80px;
   /* border-right: 1px solid #; */
    `;

export const myPageButton = css`
    width: 300px;
    height: 60px;
    border:none;
    border-bottom: 2px solid #dbdbdb;
    background-color: #fafafa;
 
    &:hover {
        cursor: pointer;
        
        transition: 0.5s;
        background-color: #ffc045;    
    }

`;

export const sideBarButton = css`
    width: 300px;
    height: 60px;
    border:none;
    border-bottom: 2px solid #dbdbdb;
    background-color: #fafafa;

    &:hover {
        cursor: pointer;
        
        transition: 0.5s;
        background-color: #ffc045;
    }
`;
