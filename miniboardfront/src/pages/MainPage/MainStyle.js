import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin-left: 200px;
border: 1px solid #121212;
`;

export const headerBox = css`
    width: 100%;
    margin-top: 100px;
`;

export const headerTitle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    width: 200px;
`;

export const title = css`
    font-weight: 600;
    font-size: 30px;

    &:hover{
        cursor: pointer;
    }
`;

export const searchBarAndWriteButtonBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 800px;
`;

export const searchBarBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const searchInput = css`
    width: 400px;
    height: 35px;
    &:hover{
        box-shadow: 0px 0px 8px 3px #C7BCBE;
        border: none;
    }
    
    &:focus{
        box-shadow: 0px 0px 8px #C7BCBE;
        border: none;
    }
`;

export const searchButton = css`
    width: 50px;
    height: 35px;

    background-color: #E0EDD4;
    border: 0.5px solid #121212;
    color: #0c3934;

    &:hover {
        background-color: #D7F0B6;
        font-weight: 600;
        border: none;
        box-shadow: 0px 0px 9px 2px #646161;
        cursor: pointer;
    }

    &:active {
        background-color: #e5e8dc;
    }
`;

export const writeButtonBox = css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 800px;
    height: 60px;
`;

export const writeButton = css`
    width: 150px;
    height: 30px;
    border: 0.5px solid #0c3934;
    background-color: #E0EDD4;
    &:hover {
        background-color: #D7F0B6;
        font-weight: 600;  
        border: none;
        box-shadow: 0px 0px 9px 2px #646161;
        cursor: pointer;
    }

    &:active {
        background-color: #e5e8dc;
    }
`;

export const mainBox = css`
    width: 100%;
    display: flex;
    justify-content: center;
    /////////////////
    /* height: 100vh; */
    /////////////////

    max-height: 500px;
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
    /* position: relative; */
    
    height: 25px;
    background-color: #fafafa;
    font-size: 12px;
    &:hover {
        background-color: #E0EDD4;
        font-weight: 600;
        box-shadow: 0px 0px 10px 3px #E0EDD4;
        border: none;
        cursor: pointer;
    }

    &:active {
        background-color: #E0EDD4;
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

export const footerContainer = css`
    display: flex;
    position: fixed;
    bottom: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 130px;
`;

export const pageButton = css`
    border: 1px solid #121212;
    border-radius: 5px;
    background-color: #D7F0B6;
    &:hover{
        box-shadow: 0px 0px 5px 3px #C7BCBE;
        border: none;
    }
    
    &:focus{
        box-shadow: 0px 0px 5px #C7BCBE;
        border: none;
        outline: none;
    }
`;

export const pageNumberButton = css`
    background-color: #fafafa;
    border-radius: 5px;
    /* border: 1px solid #121212; */
    &:hover{
        box-shadow: 0px 0px 10px 3px #C7BCBE;
        border: none;
    }
`;