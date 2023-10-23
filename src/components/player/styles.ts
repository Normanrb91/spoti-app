import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 88px;
    padding: 16px;
`

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;

    height: 100%;
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
        font-size: ${({theme}) => theme.fontSizes[14]};
        color: ${({theme}) => theme.colors.textOn};
    }

    p {
        flex: 1 1 0%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 20px;
        font-weight: ${({theme}) => theme.fontWeights.normal};
        font-size: ${({theme}) => theme.fontSizes[12]};
        color: ${({theme}) => theme.colors.textOff};
    }
`
