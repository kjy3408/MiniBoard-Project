import { css } from "@emotion/react";

export const myPageContainer = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    width: 1200px;
    height: 830px;
`;

export const myPageLabelContainer = css`
    width: 1200px;
    height: 80px;

    margin: 30px auto;
    margin-bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const myPageLabel = css`
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
