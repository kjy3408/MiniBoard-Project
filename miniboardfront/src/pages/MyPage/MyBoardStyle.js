import { css } from "@emotion/react";

export const myBoardContainer = css`
    width: 1000px;
    height: 650px;
    background-color: #f9ebee;

    border: 1px solid #121212;
    border-radius: 25px;

    overflow: auto;
`;

export const backButton = css`
    position: absolute;
    top: 30px;
    left: 150px;
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

export const myBoardLabelContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    height: 100px;
`;

export const myBoardLabel = css`
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

    td {
        position: relative;
    }
    .buttons {
        display: none;
    }
    &:hover {
        background-color: #fafafa;
        cursor: pointer;

        .buttons {
            display: flex;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.8;
        }
    }

    &:active {
        background-color: #dbdbdb;
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
    min-width: 430px;
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

export const deleteAndModifyButton = css`
    font-size: 14px;
    width: 100px;
    margin-left: 30px;
    background-color: #FBF5F6;
    font-weight: 600;
    &:hover {
        background-color: #FAEFF1;
        font-weight: 600;
        box-shadow: 0px 0px 10px 5px #C7BCBE;
        border: none;
        cursor: pointer;
    }
`;
