import { keyframes, styled } from 'styled-components'


const dance = keyframes`
    from {
        height: 10px;
    }
    to {
        height: 100%;
    }
`

export const StyledLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;

    .bars {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;
        width: 100px;
        min-width: 100px;
        height: 50px;
        margin: 0 auto;
        z-index: 2;
        position: relative;
        left: 0;
        right: 0;
    }
`

export const StyledBar = styled.div<{$delay: string}>`
    width: 10px;
    height: 5px;
    margin: 0 2px;
    background-color: ${({theme})=> theme.colors.secondary};
    animation-name: ${dance};
    animation-duration: 400ms;
    animation-play-state: running;
    animation-direction: alternate;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: ${props => props.$delay || '0ms'};
`