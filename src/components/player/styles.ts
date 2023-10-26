import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    min-height: 88px;
    max-height: 190px;
    padding: 16px 16px;
    gap: 16px;


    @media (max-width: ${({theme}) => theme.breakpoints.sm}) {
        grid-template-columns: 1fr 2fr 1fr
    }

    @media (max-width: ${({theme}) => theme.breakpoints.xs}) {
        grid-template-columns: 1fr; 
        grid-template-rows: 2fr 2fr 1fr;
        gap: 0;
    }
`

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`

export const ImagenContainer = styled.div`
    flex: none;
    width: 56px;
    height: 56px;
    
    img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.xs}) {
        display: none;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-overflow: ellipsis;
    word-wrap: break-word;
    
    h4 {
        font-weight: ${({theme}) => theme.fontWeights.semibold};
        font-size: ${({theme}) => theme.fontSizes[14]};
        color: ${({theme}) => theme.colors.textOn};
    }

    p {
        line-height: 20px;
        font-weight: ${({theme}) => theme.fontWeights.normal};
        font-size: ${({theme}) => theme.fontSizes[12]};
        color: ${({theme}) => theme.colors.textOff};
    }
`
