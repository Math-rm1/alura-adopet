import styled from 'styled-components'

export const StyledHeader = styled.header`
  max-width: 80%;
  height: 120px;

  margin: 0 auto;
  padding: 0 10px;

  display: flex;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: url('src/assets/Forma-1.svg') 0 0 no-repeat;
  }
`

export const StyledUnorderedList = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
`

export const StyledAvatar = styled.img`
  height: 40px;
  width: 40px;

  margin-left: auto;
`
