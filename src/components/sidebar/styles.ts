import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    row-gap: 8px;
    max-width: 350px;
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