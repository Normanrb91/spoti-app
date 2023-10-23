import { NavLink as NavLinkRouter } from 'react-router-dom'
import styled from "styled-components";


export const Container = styled.article`
    position: relative;
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

export const Link = styled(NavLinkRouter)`
    display: flex;
    padding: 16px;
    height: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 160px;
`

export const ImagenContainer = styled.div`
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
    right: 20px;
    bottom: 80px;
    opacity: 0;
    transition-duration: .3s;
    z-index: 2;
   
    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        border: none;
        background-color: ${({theme}) => theme.colors.secondary};
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);
        border-radius: 99999px;
        cursor: pointer;

        &:hover{
            transform: scale(1.05)
        }
        
    }

    ${Container}:hover & {
        bottom: 96px;
        opacity: 1;
    }
`