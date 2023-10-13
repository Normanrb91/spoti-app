import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    row-gap: 8px;
    width: 350px;

    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        position: absolute;
        left: 0;
        top: 0;
        transition: all .5s ease;
        z-index: 3;
        background-color: ${({theme}) => theme.colors.tertiary };

        &.inactive {
            transform: translate(-350px);
        }
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.tertiary };
`

export const Library = styled(Menu)`
    flex: 1 1 0%;

`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 8px;
`