import { css } from "@emotion/react";

export const writeBoardContainer = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    width: 1200px;
    height: 700px;

border: 1px solid #121212;
`;

export const headerContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
    height: 100px;
/* border: 1px solid #121212; */
`;
 export const text = css`
    font-size: 30px;
    font-weight: 600;

    margin: 40px 0px 40px 0px;
 `;

export const mainConatiner = css`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    width: 1000px;
    height: 600px;
/* border: 1px solid blue; */
`;

export const titleContainer = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 900px;
    height: 60px;
`;

export const titleInput = css`
    width: 800px;
    height: 50px;
`;

export const contentInput = css`
/* margin-top: 5px; */
    width: 800px;
    height: 450px;
`;

export const registerButtonContainer = css`
    display: flex;
    justify-content: flex-end;

    width: 805px;
    height: 40px;

    /* border: 1px solid #121212; */
`;

export const errorMessages = css`
font-size: 15px;
    color: red;
`;