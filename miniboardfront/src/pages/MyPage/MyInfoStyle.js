import { css } from "@emotion/react";

export const myInfoContainer = css`
      display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    width: 1200px;
    height: 830px;
`;

export const myInfoTitleContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1200px;
    height: 80px;

    /* border: 1px solid #121212; */
`;

export const myInfoTitle = css`
    font-size: 30px;
    font-weight: 600;
`;

export const myInfoDataContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 500px;
    /* height: 700px; */

    /* border: 1px solid #121212; */
`;

export const infoContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    
    width: 500px;
    height: 80px;

    border-bottom: 2px solid #dbdbdb;
`;

export const infoLabelContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 150px;
    height: 80px;

    /* border: 1px solid #121212; */
`;

export const infoLabel = css`
    font-size: 17px;
    font-weight: 600;
`;


export const infoBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 350px;
    height: 80px;

    /* border: 1px solid #121212; */
`;

export const buttonComment = css`
    font-size: 14px;
    color: red;
`;

export const passwordContainer = css`
    display: flex;
`;

export const boardInfoTitleContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    font-size: 30px;
    font-weight: 600;
    width: 500px;
    height: 80px;
    /* border: 1px solid #121212; */
`;

export const countButton = css`
    width: 300px;
    height: 50px;

    font-size: 30px;
    border: none;
    background-color: white;

    &:hover{
        cursor: pointer;
        font-weight: 600;
    }
`;