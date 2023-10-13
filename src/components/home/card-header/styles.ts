import { NavLink as NavLinkRouter } from 'react-router-dom'
import styled from "styled-components";

export const Link = styled(NavLinkRouter)`
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.colors.cardHeader};
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    overflow: hidden;
    cursor: pointer;
    transition-duration: .3s;
    
    &:hover{
        background-color: ${({theme}) => theme.colors.cardFocus};
    }
`

export const ImagenContainer = styled.div`
    width: 80px;
    height: 80px;
    
    >img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const TextContainer = styled.div`
    display: block;

    >h4 {
        font-weight: ${({theme}) => theme.fontWeights.bold};
        font-size: ${({theme}) => theme.fontSizes[16]};
        color: ${({theme}) => theme.colors.textOn};
    }
`

export const IconContainer = styled.div`
    position: absolute;
    right: 16px;
    opacity: 0;
    transition-duration: .3s;

    >span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        background-color: ${({theme}) => theme.colors.secondary};
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);
        border-radius: 99999px;

        &:hover{
            transform: scale(1.05)
        }
        
    }

    ${Link}:hover & {
        opacity: 1;
    }
`