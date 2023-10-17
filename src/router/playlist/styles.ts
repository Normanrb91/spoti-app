import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1;
`

export const IconBackContainer = styled.div`
    display: flex;
    cursor: pointer;

    >span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        background-color: ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.colors.textOn};
        border-radius: 99999px;        
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 24px 0px 24px;
    background: ${({theme}) => theme.colors.secondary}9C;
`

export const HeaderWraper = styled.div`
    display: flex;
    align-items: stretch;
    padding: 24px 0;
    gap: 32px;

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
`

export const ImagenContainer = styled.div`
    flex:none;
    width: 208px;
    height: 208px;
    box-shadow: 0 10px 15px -3px;

    >img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: ${({theme}) => theme.colors.textOn};
    font-size: ${({theme}) => theme.fontSizes[16]};
    font-weight: ${({theme}) => theme.fontWeights.semibold}; 

    > span {
        display: flex;
        flex: 1 1 0%;
        align-items: flex-end;
    }

    > h1 {
        font-weight: ${({theme}) => theme.fontWeights.bold};
        font-size: ${({theme}) => theme.fontSizes[64]};
        color: ${({theme}) => theme.colors.textOn};
        line-height: 64px;

        @media (max-width: 750px) {
            font-size: ${({theme}) => theme.fontSizes[32]};
            line-height: 32px;
            text-align: center;
        }
    }

    > p {
        display: flex;
        flex: 1 1 0%;
        align-items: flex-end;
    }

    @media (max-width: 750px) {
        font-size: ${({theme}) => theme.fontSizes[16]};
        align-items: center;
        gap: 16px;
    }
`

export const IconPlayContainer = styled.div`
    display: flex;
    cursor: pointer;

    >span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        background-color: ${({theme}) => theme.colors.secondary};
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);
        border-radius: 99999px;

        &:hover{
            transform: scale(1.05)
        }
    }
`

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: linear-gradient( to bottom, ${({theme}) => theme.colors.secondary}57,  ${({theme}) => theme.colors.tertiary} 30%) ;

    @media (max-width: 750px) {
        padding: 16px;
    }
`

export const BodyWraper = styled.div`
    padding: 24px 24px 0px 24px;

    @media (max-width: 750px) {
        padding: 16px 0; 
    }
`

export const Background = styled.div`
    position: absolute;
    z-index: -1;
    inset: 0;
    height: 100vh;
    //background-image: linear-gradient(to bottom, #21c872, rgb(255 255 255 / 0));

    >img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.2;
        z-index: -1;
        position: absolute;
        inset: 0;
        filter: blur(12px);
    }
`
