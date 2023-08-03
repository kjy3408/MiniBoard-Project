import { css } from "@emotion/react";

export const myPageContainer = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    width: 1200px;
    height: 830px;

    /* border: 1px solid #121212; */
`;

export const myPageTitleContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 1200px;
    height: 100px;

    /* border: 1px solid #121212; */
`;

export const myPageTitle = css`

    font-size: 30px;

    font-weight: 600;
`;

export const myPageButtonContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 1200px;
    height: 100px;
    margin-top: 50px;
    /* border: 1px solid #121212; */
`;

export const myPageButton = css`
    border:none;
    border-bottom: 2px solid gray;
    border-radius: 20px;
    background-color: #fafafa;
    font-size: 20px;
    box-shadow: 0px 0px 4px 0px;

    &:hover {
        box-shadow: 1px 0px 5px 2px;
        font-weight: 600;
    }

    width: 500px;
    height: 80px;
`;