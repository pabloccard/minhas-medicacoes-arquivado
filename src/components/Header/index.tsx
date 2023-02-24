import { Container } from './styles'

export const Header = () => {
  return (
    <Container>
      <div>
        <span>LOGO</span>
        <nav>
          <a href="/">Home</a>
          <a href="/calendar">Calendário</a>
          <a href="">Resumo</a>
        </nav>

        <button>
          <a href="/create">AGENDAR MEDICAÇÃO</a>
        </button>
      </div>
    </Container>
  )
}
