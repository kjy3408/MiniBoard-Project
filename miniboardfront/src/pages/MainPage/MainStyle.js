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

    font-weight: 600;
    font-size: 35px;

/* border: 1px solid #121212; */
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
    width: 300px;
    height: 20px;
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

export const thNumber = css`
    width: 50px;
    `;

export const thTitle = css`
    width: 800px;
    `;

export const thDate = css`
    width: 150px;
    `;

export const thUser = css`
    width: 100px;
    `;

export const thViews = css`
    width: 100px;
`;

export const tableTR2 = css`
    position: relative;
    justify-content: center;
    align-items: center;
    height: 30px;

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
    width: 50px;
    height: 30px;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
`;

export const titleTable = css`
    text-align: center;
    width: 800px;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
`;

export const dateTable = css`
    text-align: center;
    width: 150px;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
`;
export const nicknameTable = css`
    text-align: center;
    width: 100px;
    border-bottom: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    color: #CC9074;
`;

export const viewsTable = css`
    text-align: center;
    width:100px;
    border-bottom: 1px solid #dbdbdb;
    `;

export const modifyText = css`
    width: 100px;

    font-weight: 600;
    color: darkblue;
    position: absolute;
    top:50%;
    left: 66%;
    transform: translate(-50%, -50%);
    opacity: 0.8;
`;