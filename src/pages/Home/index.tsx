import { DialogDemo } from '../../components/Dialog'
import { Hero, Container } from './styles'
import heroImg from '../../assets/pimple-patches-pana.svg'

export function Home() {
  return (
    <Container>
      <Hero>
        <h1>
          Simplifique o <span>gerenciamento</span> de suas medicações
        </h1>

        <img src={heroImg} alt="Mulher segurando um medicamento" />
        <p>
          Chega de se atrapalhar na hora de <br /> programar suas medicações.
        </p>

        <DialogDemo />
      </Hero>
    </Container>
  )
}
