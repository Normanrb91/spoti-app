import styled from "styled-components";

export const Container = styled.div`
`

export const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 2fr 2fr 0.4fr;
    color: ${({theme}) => theme.colors.textOn};

    @media (max-width: 1350px) {
        grid-template-columns: 0.3fr 1.8fr 1.8fr 0.6fr;
    }

    @media (max-width: 740px) {
        display: none;
    }
`
    
export const HeaderCol = styled.div`
    padding: 8px 16px;
` 

export const Tracks = styled.div`
    border-top: 1px solid ${({theme}) => theme.colors.textOff};

    @media (max-width: 740px) {
        border: none;
    }
` 

export const Row = styled.div`
    display: grid;
    grid-template-columns: 0.3fr 2fr 2fr 0.4fr;
    color: ${({theme}) => theme.colors.textOn};

    @media (max-width: 1350px) {
        grid-template-columns: 0.3fr 1.8fr 1.8fr 0.6fr;
    }

    @media (max-width: 740px) {
        display: flex;
        justify-content: space-between;
    }
    
` 

export const Col = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 16px;

    &.number  {
        @media (max-width: 740px) {
            display: none;
        }
    }

    &.album  {
        @media (max-width: 740px) {
            display: none;
        }
    }

    @media (max-width: 740px) {
        font-size: 18px;
    }
` 

export const ImageContainer = styled.div`
    flex: none;
    width: 40px;
    height: 40px;
    
    >img {
        width: 100%;
        border-radius: 6px;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 740px) {
        width: 56px;
        height: 56px;
    }
` 

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 6px;

` 