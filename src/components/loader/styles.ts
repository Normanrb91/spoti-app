import { keyframes, styled } from 'styled-components'


const dance = (h: string) => keyframes`
    from {
        height: ${h};
    }
    to {
        height: 100%;
    }
`

export const StyledLoader = styled.div<{$heightContent: string, $widthContent: string, $width?: string, $height?: string}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.$widthContent};
    min-height: ${props => props.$heightContent};

    .bars {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;
        width: ${props => props.$width};
        min-width: ${props => props.$width};
        height: ${props => props.$height};
        margin: 0 auto;
        z-index: 2;
        position: relative;
        left: 0;
        right: 0;
    }
`

export const StyledBar = styled.div<{$delay: string, $height: string,  $width: string, $marging: string}>`
    width: ${props => props.$width};
    height: ${props => props.$height};
    margin: ${props => props.$marging};
    background-color: ${({theme})=> theme.colors.secondary};
    animation-name: ${props => dance(props.$height)};
    animation-duration: 400ms;
    animation-play-state: running;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: ${props => props.$delay || '0ms'};
`