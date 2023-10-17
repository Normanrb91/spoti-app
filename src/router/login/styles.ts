import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    height: 100vh;
    background-color: #000;

    > img {
        height: 20vh;
    }
`


export const LoginButton = styled.button`
    padding: 18px 24px;
    display: flex;
    border: none;
    border-radius: 90px;
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.textOn};
    font-weight: ${({theme}) => theme.fontWeights.normal};
    font-size: ${({theme}) => theme.fontSizes[24]};
    cursor: pointer;

`