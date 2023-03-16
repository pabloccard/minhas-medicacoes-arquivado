import { useLocation } from 'react-router-dom'
import { DialogDemo } from '../Dialog'
import { Container, Link } from './styles'

export const Header = () => {
  const currentPath = useLocation().pathname

  return (
    <Container>
      <header>
        <img src="src/assets/pills.png" alt="" />

        <nav>
          <ul>
            <li>
              <Link to="/" active={currentPath === '/'}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/calendar" active={currentPath === '/calendar'}>
                Calendário
              </Link>
            </li>
            <li>
              <Link to="/resume" active={currentPath === '/resume'}>
                Resumo
              </Link>
            </li>
          </ul>
        </nav>

        <DialogDemo />
      </header>
    </Container>
  )
}
