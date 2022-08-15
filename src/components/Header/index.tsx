import avatar from '../../assets/Usuario.png'
import { ReactComponent as House } from '../../assets/Casa.svg'
import { ReactComponent as Messages } from '../../assets/Mensagens.svg'
import { ReactComponent as Logo } from '../../assets/Logo.svg'

import { StyledAvatar, StyledHeader, StyledUnorderedList } from './styles'
import { useViewport } from '../../hooks/useViewport'

export default function Header() {
  const { width } = useViewport()

  const tabletBreakpoint = 768
  const isTablet = width >= tabletBreakpoint

  return (
    <StyledHeader>
      <nav>
        <StyledUnorderedList>
          {isTablet && <Logo />}
          <li>
            <House />
          </li>
          <li>
            <Messages />
          </li>
        </StyledUnorderedList>
      </nav>
      <StyledAvatar src={avatar} alt="Avatar do Usuário" />
    </StyledHeader>
  )
}
