import styled from "styled-components"


export const Container= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        flex-direction: column-reverse;
    }
`

export const Wraper= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 24px;

    > span {
        font-size: ${({theme}) => theme.fontSizes[12]};
        color: ${({theme}) => theme.colors.textOff};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        width: 100%;
    }
`

export const IconPlayer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    background-color: ${({theme}) => theme.colors.textOn};
    border-radius: 99999px;
    cursor: pointer;

    &:hover{
        transform: scale(1.05)
    }
`

export const IconControl = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    color: ${({theme}) => theme.colors.textOff};
    cursor: pointer;

    &:hover{
        color: ${({theme}) => theme.colors.textOn};
    }
`