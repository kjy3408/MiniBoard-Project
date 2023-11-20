import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    height: 100vh;
    margin-left: 200px;
    overflow: auto;
`;

export const backButton = css`
    position: absolute;
    top: 30px;
    left: 350px;
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

export const headerBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
`;

export const headerTitle = css`
    font-size: 30px;
    font-weight: 600;
`;


export const mainBox = css`
    width: 100%;
    display: flex;
    justify-content: center;
    max-height: 600px;
    overflow: auto;
`;

export const tableBox = css`
    width: 80%;
    /* height: 100%; */
    /* text-align: center; */
    border: 1px solid black;
`;

export const tableHead = css`
    height: 20px;
    font-size: 16px;
    font-weight: 600;
    /* text-align: center; */
    background-color: #E0EDD4;
    color: darkgray;
    border-top: 1.5px solid #121212;
    border-bottom: 1.5px solid #121212;
`;

export const tableHeadNumber = css`
    width: 5%;
`;

export const tableHeadTitle = css`
    max-width: 54%;
    min-width: 54%;
`;

export const tableHeadRegisterDate = css`
    width: 8%;
`;
export const tableHeadWriteUser = css`
    width: 8%;
`;

export const tableHeadViews = css`
    width: 5%;
`;

export const tableHeadLikeCount = css`
    width: 6%;
`;

export const tableHeadCommentCount = css`
    width: 6%;
`;

export const tableHeadModify = css`
    width: 8%;
`;


export const tableRow = css`
    position: relative;
    text-align: center;
    height: 25px;
    background-color: #FBF5F6;
    font-size: 12px;

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

export const tableDataNumber = css`
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    text-align: center;
`;

export const tableDataTitle = css`
    white-space: nowrap;
    overflow: hidden;
    max-width: 40%;
    min-width: 40%;
    text-overflow: ellipsis;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    padding: 5px 5px 0px 5px;
`;

export const tableDataDate = css`
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    text-align: center;
`;
export const tableDataNickname = css`
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    color: #7a49a5;
    text-align: center;
`;

export const tableDataViews = css`
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    text-align: center;
`;

export const tableDataLikeCount = css`
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    text-align: center;
`;

export const tableDataCommentCount = css`
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    text-align: center;
`;
export const tableDataModify = css`
    color: red;
    border-bottom: 1px solid #dbdbdb;
    text-align: center;
`;
























// export const table = css`
//     width: 950px;
//     margin: auto;
// `;

// // export const tableHead = css`
// //     text-align: center;
// //     font-size: 15px;
// //     font-weight: 600;
// //     border-top: 2px solid #121212;
// //     border-bottom: 2px solid #121212;
// // `;

// export const thTitle = css`
//     width: 470px;
// `;

// export const numberTable = css`
//     border-bottom: 1px solid #dbdbdb;
//     border-right: 1px solid #dbdbdb;
//     font-size: 12px;
// `;

// export const titleTable = css`
//     white-space: nowrap;
//     overflow: hidden;
//     min-width: 430px;
//     max-width: 470px;
//     text-overflow: ellipsis;
//     border-bottom: 1px solid #dbdbdb;
//     border-right: 1px solid #dbdbdb;
//     font-size: 12px;
//     padding: 5px 5px 0px 5px;
// `;

// export const dateTable = css`
//     border-bottom: 1px solid #dbdbdb;
//     border-right: 1px solid #dbdbdb;
//     font-size: 12px;
// `;
// export const nicknameTable = css`
//     border-bottom: 1px solid #dbdbdb;
//     border-right: 1px solid #dbdbdb;
//     color: #7a49a5;
//     width: 120px;
//     font-size: 12px;
// `;

// export const viewsTable = css`
//     border-right: 1px solid #dbdbdb;
//     border-bottom: 1px solid #dbdbdb;
//     font-size: 12px;
// `;

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
