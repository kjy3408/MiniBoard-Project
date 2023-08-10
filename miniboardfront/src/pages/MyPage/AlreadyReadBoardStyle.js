import { css } from "@emotion/react";

export const alreadyBoardContainer = css`
    width: 1000px;
    height: 600px;
    background-color: #f9ebee;

    border: 1px solid #121212;
    border-radius: 25px;

    overflow: auto;
`;

export const alreadyBoardTitleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    height: 100px;
`;

export const alreadyBoardTitle = css`
    font-size: 30px;
    font-weight: 600;
`;

export const tableContainer = css`
    width: 950px;
    margin: auto;
`;
export const thead = css`
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    border-top: 2px solid #121212;
    border-bottom: 2px solid #121212;
`;

export const thTitle = css`
    width: 470px;
`;

export const tableTR2 = css`
    position: relative;
    text-align: center;
    height: 25px;
    background-color: #FBF5F6;
    &:hover {
        background-color: #FAEFF1;
        font-weight: 600;
        box-shadow: 8px 0px 10px #C7BCBE;
        border: none;
        cursor: pointer;
    }

    &:active {
        background-color: #E0D3D6;
    }

`;

export const numberTable = css`
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    font-size: 12px;
`;

export const titleTable = css`
    white-space: nowrap;
    overflow: hidden;
    max-width: 470px;
    text-overflow: ellipsis;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    font-size: 12px;
    padding: 5px 5px 0px 5px;
`;

export const dateTable = css`
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    font-size: 12px;
`;
export const nicknameTable = css`
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    color: #7a49a5;
    width: 120px;
    font-size: 12px;
`;

export const viewsTable = css`
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    font-size: 12px;
`;

export const readDateTable = css`
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    font-size: 12px;
`;

export const modifyTable = css`
    width: 80px;
    color: red;
    border-bottom: 1px solid #dbdbdb;
    font-size: 12px;
`;