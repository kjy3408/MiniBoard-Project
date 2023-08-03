import { css } from "@emotion/react";

export const alreadyBoardContainer = css`
    width: 1200px;
    height: 800px;
`;

export const alreadyBoardTitleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    height: 100px;
border: 1px solid #121212;
`;

export const alreadyBoardTitle = css`
    font-size: 30px;
    font-weight: 600;

`;


export const tableContainer = css`
    width: 1150px;

    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 30px;
`;
export const thead = css`
    /* text-size-adjust: 50px; */
    height: 25px;

    text-align: center;
    text-justify: center;
    margin: auto;
    font-size: 20px;
    font-weight: 600;
    border-top: 2px solid #121212;
    border-bottom: 2px solid #121212;
`;

export const thTitle = css`
    width: 550px;
`;

export const tableTR2 = css`
    position: relative;
    height: 30px;
    text-align: center;
    border-collapse: collapse;
    &:hover {
        background-color: #fafafa;
        cursor: pointer;
    }

    &:active {
        background-color: #dbdbdb;
    }

`;

export const numberTable = css`
    text-align: center;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
`;

export const titleTable = css`
    white-space: nowrap;
    overflow: hidden;
    max-width: 550px;
    text-overflow: ellipsis;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
`;

export const dateTable = css`
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
`;
export const nicknameTable = css`
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    color: #CC9074;
`;

export const viewsTable = css`
    text-align: center;
    border-bottom: 1px solid #dbdbdb;
`;

export const readDateTable = css`
    border-bottom: 1px solid #dbdbdb;
`;

export const modifyTable = css`
    font-size: 10px;
    color: red;
    border-bottom: 1px solid #dbdbdb;
`;