import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    padding: 8px;
    gap: 8px;
    background-color: ${({theme}) => theme.colors.background};
`