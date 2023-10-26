import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 8px;
    color: white;

    @media (max-width: ${({theme}) => theme.breakpoints.xs}) {
        justify-content: center;
    }
`

export const Wraper= styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    gap: 8px;

    > span {
        font-size: ${({theme}) => theme.fontSizes[12]};
        color: ${({theme}) => theme.colors.textOff};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        width: 80%;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.xs}) {
        width: 100%;
    }
`

export const IconVolume = styled.button`
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

