import { DialogDemo } from '../../components/Dialog'
import { Hero, Container } from './styles'

export function Home() {
  return (
    <Container>
      <Hero>
        <h1>
          Simplifique o <span>gerenciamento</span> de suas medicações
        </h1>

        <img
          src="src/assets/pimple-patches-pana.svg"
          alt="Mulher segurando um medicamento"
        />
        <p>Chega de se atrapalhar na hora de programar suas medicações.</p>

        <DialogDemo />
      </Hero>
    </Container>
  )
}
