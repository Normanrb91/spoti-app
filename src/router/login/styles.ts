import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;

  > img {
    width: 50%;
    height: auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      width: 90%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    gap: 20px;
  }
`

export const LoginButton = styled.button`
  padding: 18px 24px;
  display: flex;
  border: none;
  border-radius: 90px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textOn};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes[24]};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes[16]};
  }
`
