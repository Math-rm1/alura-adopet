import avatar from '../../assets/Usuario.png'
import casa from '../../assets/Casa.svg'
import mensagens from '../../assets/Mensagens.svg'

import { StyledAvatar, StyledHeader, StyledUnorderedList } from './styles'

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <StyledUnorderedList>
          <li>
            <img src={casa} alt="Casa" />
          </li>
          <li>
            <img src={mensagens} alt="Envelope" />
          </li>
        </StyledUnorderedList>
      </nav>
      <StyledAvatar src={avatar} alt="Avatar do Usuário" />
    </StyledHeader>
  )
}
