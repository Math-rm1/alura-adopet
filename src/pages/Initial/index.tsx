import {
  StyledButtonGroup,
  StyledInitialContainer,
  StyledInitialPage,
} from './styles'
import { ReactComponent as Logo } from '../../assets/Logo.svg'
import { ReactComponent as MainPetIllustration } from '../../assets/Ilustracao-1.svg'

export default function Initial() {
  return (
    <>
      <StyledInitialContainer>
        <h1 title="Logo">
          <Logo />
        </h1>

        <h3>Boas Vindas!</h3>

        <p>
          Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
          gente!
        </p>

        <StyledButtonGroup>
          <button>Já tenho conta</button>
          <button>Quero me cadastrar</button>
        </StyledButtonGroup>

        <MainPetIllustration />
      </StyledInitialContainer>
      <StyledInitialPage />
    </>
  )
}
