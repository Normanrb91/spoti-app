import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 24px 0px 24px;
    background: linear-gradient( to bottom, ${({theme}) => theme.colors.secondary}9F,  ${({theme}) => theme.colors.tertiary} 80%) ;

    > h1 {
        font-weight: ${({theme}) => theme.fontWeights.bold};
        font-size: ${({theme}) => theme.fontSizes[32]};
        color: ${({theme}) => theme.colors.textOn};
    }
`

export const HeaderWraper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 16px;
    column-gap: 20px;
    margin-top: 20px;

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
