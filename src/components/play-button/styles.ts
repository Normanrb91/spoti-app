import styled from "styled-components";


export const Button = styled.button<{$width?: string, $height?: string}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.$width ? props.$width : '48px'};
    height: ${(props) => props.$height ? props.$height : '48px'};
    border: none;
    background-color: ${({theme}) => theme.colors.secondary};
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);
    border-radius: 99999px;
    cursor: pointer;

    &:hover{
        transform: scale(1.05)
    }
`