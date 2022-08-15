import styled, { createGlobalStyle } from 'styled-components'

export const StyledInitialContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 200px);

  h1 svg {
    margin-top: 2rem;
    height: 46px;
    width: 186.67px;
  }

  > svg {
    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    transition: all 0.1s ease-in-out;

    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
      right: 0;
    }

    @media (min-width: 1440px) {
      bottom: 56px;
    }
  }
  h3 {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin-top: 1.5rem;
    line-height: 48px;
  }

  p {
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    max-width: 15rem;
    line-height: 24px;
    margin-top: 1rem;
  }
`

export const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  gap: 1rem;

  button {
    border: none;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.white};
    width: 180px;
    height: 40px;

    line-height: 24px;
    font-weight: 600;
    background: ${({ theme }) => theme.colors.coral};

    border-radius: 6px;

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`

export const StyledInitialPage = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.colors.blue};
    }
`
