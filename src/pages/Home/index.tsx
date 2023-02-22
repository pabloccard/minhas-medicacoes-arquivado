import { Content, Hero } from './styles'
import girl from '../../../public/pimple-patches-pana.svg'

export function Home() {
  return (
    <Hero>
      <Content>
        <h1>Transforme a gestão de medicações em uma tarefa tranquila</h1>

        <p>
          nosso aplicativo de agendamento de medicamentos é fácil de usar e
          confiável, ajudando você a manter sua saúde sob controle
        </p>
      </Content>

      <img src={girl} alt="" />
    </Hero>
  )
}
