import { css } from "@emotion/react";

export const mainContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9ebee;
    width: 1000px;
    height: 600px;
    border-radius: 25px;
    margin: auto;
border: 1px solid #121212;
`;

export const header = css`
    width: 1000px;
`;

export const mainTitle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    width: 200px;
`;

export const mainTitleText = css`
    font-weight: 600;
    font-size: 30px;

    &:hover{
        cursor: pointer;
    }
`;

export const searchBarAndWriteButtonContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 50px 0px 0px 0px;
    width: 1000px;
`;

export const searchBarContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 800px;
`;

export const searchInput = css`
    width: 400px;
    height: 25px;
    border: none;
    border-radius: 5px;
    /* box-shadow: 0px 3px 4px 0px #C7BCBE; */
    &:hover{
        box-shadow: 0px 0px 8px 3px #C7BCBE;
        border: none;
    }
    
    &:focus{
        box-shadow: 0px 0px 8px #C7BCBE;
        border: none;
        outline: none;
    }
`;

export const searchButton = css`
    width: 50px;
    height: 25px;

    border-radius: 5px;
    background-color: #ECEAFD;
    border: 0.5px solid #121212;
    color: #0c3934;

    &:hover {
        background-color: #C7BCBE;
        color: #312F2F;
        font-weight: 600;
        border: none;
        box-shadow: 0px 0px 9px 2px #646161;
        cursor: pointer;
    }

    &:active {
        background-color: #e5e8dc;
    }
`;

export const writeButtonContainer = css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 900px;
`;

export const writeButton = css`
    width: 150px;
    height: 30px;
    border: 0.5px solid #0c3934;
    border-radius: 5px;
    background-color: #ECEAFD;
    &:hover {
        background-color: #C7BCBE;
        color: #312F2F;
        font-weight: 600;  
        border: none;
        box-shadow: 0px 0px 9px 2px #646161;
        cursor: pointer;
    }

    &:active {
        background-color: #e5e8dc;
    }
`;

export const tableContainer = css`
    margin-top: 10px;
    width: 950px;
    background-color: #fafafa;
`;

export const thead = css`
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    border-top: 1.5px solid #121212;
    border-bottom: 1.5px solid #121212;
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
        box-shadow: 0px 0px 10px 3px #C7BCBE;
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
    width: 120px;
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

export const modifyTable = css`
    color: red;
    border-bottom: 1px solid #dbdbdb;
    font-size: 12px;
    width: 80px;
`;

export const footerContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    width: 1000px;
    height: 30px;
`;

export const pageButton = css`
    border: 1px solid #121212;
    border-radius: 5px;
    background-color: #EBEEF9;
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