import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 88px;
    padding: 16px;
`


export const ContentRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 100%;
    color: white;
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


export const ContentCenter= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`

export const Grid= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 24px;

    > span {
        font-size: ${({theme}) => theme.fontSizes[12]};
        color: ${({theme}) => theme.colors.textOff};
    }
`

export const IconPlayer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    background-color: ${({theme}) => theme.colors.textOn};
    border-radius: 99999px;
    cursor: pointer;

    &:hover{
        transform: scale(1.05)
    }
`

export const IconControl = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    color: ${({theme}) => theme.colors.textOff};
    cursor: pointer;

    &:hover{
        color: ${({theme}) => theme.colors.textOn};
    }
`


export const ContentLeft = styled.div`
    display: flex;
    align-items: center;

    height: 100%;
    gap: 16px;
`

export const IconVolume = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    color: ${({theme}) => theme.colors.textOff};
    cursor: pointer;

    &:hover{
        color: ${({theme}) => theme.colors.textOn};
    }
`

