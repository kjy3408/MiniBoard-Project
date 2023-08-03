import { css } from "@emotion/react";

export const myBoardContainer = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    width: 1200px;
    height: 830px;
`;

export const myBoardLabelContainer = css`
    width: 1200px;
    height: 80px;

    margin: 30px auto;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const myBoardLabel = css`
    font-size: 30px;
    font-weight: 600;
`;

export const tableContainer = css`
    width: 1150px;

    justify-content: center;
    align-items: center;
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
    width: 600px;
`;
export const tableTR2 = css`
    text-align: center;
    height: 30px;

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
`;

export const titleTable = css`
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
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
    border-bottom: 1px solid #dbdbdb;
    `;

export const deleteAndModifyButton = css`
    font-size: 14px;
    width: 100px;
    margin-left: 30px;

    &:hover{
        font-weight: 600;
    }
`;
