import { css } from "@emotion/react";

export const mainContainer = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    width: 1200px;
    height: 830px;
`;

export const header = css`
    width: 1200px;
    /* height: 200px; */

/* border:  1px solid #121212; */
`;

export const mainTitle = css`
    margin:  0px auto;
    width: 200px;
    /* height: 50px; */


/* border: 1px solid #121212; */
`;

export const mainTitleText = css`
    
    font-weight: 600;
    font-size: 35px;

    &:hover{
        cursor: pointer;
    }
`;

export const searchBarAndWriteButtonContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 80px 0px 0px 0px;
    width: 1200px;
    /* height: 50px; */

/* border: 3px solid green; */
`;

export const searchBarContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1200px;

/* border: 2px solid blue; */
`;

export const searchInput = css`
    width: 400px;
    height: 25px;
`;

export const searchButton = css`
    width: 50px;
    height: 25px;
`;

export const writeButtonContainer = css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 1100px;
`;

export const writeButton = css`
    width: 150px;
    height: 40px;

    &:hover {
        background-color: #fafafa;
        cursor: pointer;
    }

    &:active {
        background-color: #dbdbdb;
    }
`;

export const tbodyContainer = css`
    
    /* height: 550px; */

    /* border: 2px solid #121212; */
`;

export const tableContainer = css`
    width: 1150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const thead = css`
    height: 25px;
    text-align: center;
    margin: auto;
    font-size: 20px;
    font-weight: 600;
    border-top: 2px solid #121212;
    border-bottom: 2px solid #121212;
`;

export const thTitle = css`
    width: 650px;
`;

export const tableTR2 = css`
    position: relative;
    text-align: center;
    /* height: 300px; */

    &:hover {
        background-color: #fafafa;
        cursor: pointer;
    }

    &:active {
        background-color: #dbdbdb;
    }

`;

export const numberTable = css`
    height: 30px;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
`;

export const titleTable = css`
    white-space: nowrap;
    overflow: hidden;
    max-width: 650px;
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
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    `;

export const modifyTable = css`
    font-size: 15px;
    color: red;
    border-bottom: 1px solid #dbdbdb;
`;

export const footerContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 100px;
    width: 1200px;
    height: 50px;

/* border: 1px solid #121212 */
`;