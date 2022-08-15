import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
  height: 104px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.green};

  p {
    color: ${({ theme }) => theme.colors.white};
  }

  // media
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    height: 80px;
  }
`
