import { Content, Hero, Container } from './styles'

export function Home() {
  return (
    <Container>
      <Hero>
        <Content>
          <h1>Simplifique o gerenciamento de suas medicações</h1>

          <p>Agende suas medicações e siga seu tratamento de forma eficaz</p>
        </Content>

        <img
          src="src/assets/pimple-patches-pana.svg"
          alt="Mulher segurando um medicamento"
        />
      </Hero>
    </Container>
  )
}
