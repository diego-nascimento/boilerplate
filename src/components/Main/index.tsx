import * as SC from './styles'

const Main = ({
  title = 'React avançado',
  description = 'Typescript, ReactJS e Styled Components'
}) => (
  <SC.Wrapper>
    <SC.Title>{title}</SC.Title>
    <SC.Logo
      src="/img/logo.svg"
      alt="Image de um átomo e React Avançado escrito ao lado"
    />
    <SC.Description>{description}</SC.Description>
    <SC.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </SC.Wrapper>
)

export default Main
