import { NavLink as NavLinkRouter } from 'react-router-dom'
import styled from "styled-components";

export const Link = styled(NavLinkRouter)`
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 6px;
    background-color: ${({theme}) => theme.colors.cardBody};
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    overflow: hidden;
    cursor: pointer;
    transition-duration: .3s;

    &:hover{
        background-color: ${({theme}) => theme.colors.CardBodyHover};
    }
`

export const Content = styled.div`
    width: 160px;
`

export const ImagenContainer = styled.div`
    position: relative;
    width: 100%;
    height: 160px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);

    
    >img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        object-fit: cover;
    }
`

export const TextContainer = styled.div`
    padding-top: 8px;

    > h4 {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: ${({theme}) => theme.fontWeights.bold};
        font-size: ${({theme}) => theme.fontSizes[16]};
        color: ${({theme}) => theme.colors.textOn};
    }

    > p {
        line-height: 16px;
        font-weight: ${({theme}) => theme.fontWeights.normal};
        font-size: ${({theme}) => theme.fontSizes[12]};
        color: ${({theme}) => theme.colors.textOff};
    }
`

export const IconContainer = styled.div`
    position: absolute;
    right: 8px;
    bottom: -8px;
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
        bottom: 8px;
        opacity: 1;
    }
`