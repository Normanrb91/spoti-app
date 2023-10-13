import { NavLink as NavLinkRouter } from 'react-router-dom'
import styled from "styled-components"


export const Link = styled(NavLinkRouter)`
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 8px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);
    overflow: hidden;
    cursor: pointer;
    transition-duration: .3s;

    &:hover{
        background-color: ${({theme}) => theme.colors.cardOn};
        border-radius: 6px;
    }

    &:focus{
        background-color: ${({theme}) => theme.colors.cardFocus};
    }
`

export const ImagenContainer = styled.div`
    flex: none;
    width: 48px;
    height: 48px;
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    h4 {
        width: 100%;
        flex: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: ${({theme}) => theme.fontWeights.semibold};
        font-size: ${({theme}) => theme.fontSizes[16]};
        color: ${({theme}) => theme.colors.textOn};
    }

    p {
        flex: 1 1 0%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 20px;
        font-weight: ${({theme}) => theme.fontWeights.normal};
        font-size: ${({theme}) => theme.fontSizes[14]};
        color: ${({theme}) => theme.colors.textOff};
    }
`