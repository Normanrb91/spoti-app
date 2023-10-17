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

export const Contetnt = styled.div`
    display: flex;
    width: 100%; 
    flex: 1 1 0%;
    border-radius: 8px;
    overflow-y: auto;
    background-color: ${({theme}) => theme.colors.tertiary };

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: ${({theme}) => theme.colors.cardBody };

        &:hover {
            background: ${({theme}) => theme.colors.cardHeader };
        }
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.colors.cardHeader };    
        border-radius: 20px;
        
        &:hover {
            background: ${({theme}) => theme.colors.cardFocus };
        }
    }
`

export const Overlay = styled.div`
     @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        width: 100%;
        height: 100%;
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 2;

        &.opacity {
            background: rgba(0, 0, 0, 0.5);
            transition: all .3s ease;
        }
    }
`