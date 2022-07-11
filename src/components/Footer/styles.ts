import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
  height: 104px;
  position: absolute;
  left: 0px;
  bottom: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.green};

  p {
    color: ${({ theme }) => theme.white};
  }
`
