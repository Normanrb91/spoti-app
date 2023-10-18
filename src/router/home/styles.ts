import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const BackGground = styled.div<{$backColor: string | undefined}>`
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    background: ${(props) => props.$backColor};
    transition: all .6s;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 24px 0px 24px;
    
    > h1 {
        font-weight: ${({theme}) => theme.fontWeights.bold};
        font-size: ${({theme}) => theme.fontSizes[32]};
        color: ${({theme}) => theme.colors.textOn};
    }
`

export const LinearGradient = styled.div`
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(to top, ${({theme}) => theme.colors.tertiary} 40%, rgb(0 0 0 / 0.4));
`

export const HeaderWraper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 16px;
    column-gap: 20px;
    margin-top: 20px;
    z-index: 2;
    

    @media (max-width: ${({theme}) => theme.breakpoints.md}) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${({theme}) => theme.breakpoints.xs}) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    
`

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;

    > h2 {
        font-weight: ${({theme}) => theme.fontWeights.bold};
        font-size: ${({theme}) => theme.fontSizes[24]};
        color: ${({theme}) => theme.colors.textOn};
    }
`

export const BodyWraper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 24px;    
`
