import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    padding: 8px;
    gap: 8px;
    background-color: ${({theme}) => theme.colors.background};
`

export const IconContainer = styled.div`
    position: absolute;
    right: 24px;
    top: 24px;
    transition-duration: .3s;
    display: none;
    cursor: pointer;
    color: ${({theme}) => theme.colors.textOff };

    :hover {
        color: ${({theme}) => theme.colors.textOn };
    }
    
    :focus & {
        color: ${({theme}) => theme.colors.textOn };
    }

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        display: flex;
    }
`









