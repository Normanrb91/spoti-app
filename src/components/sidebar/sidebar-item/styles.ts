import { NavLink as NavLinkRouter } from 'react-router-dom'
import styled from "styled-components"

export const Link = styled(NavLinkRouter)`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 20px;
    font-weight: ${({theme}) => theme.fontWeights.semibold};
    font-size: ${({theme}) => theme.fontSizes[16]};
    color: ${({theme}) => theme.colors.textOff};
    cursor: pointer;
    transition-duration: .3s;

    &:hover{
        color: ${({theme}) => theme.colors.textOn};
    }
`
