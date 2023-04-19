import { useLocation } from 'react-router-dom'

import { Container, Link } from './styles'
import { AiOutlineHome, AiOutlineCalendar } from 'react-icons/ai'

export const Header = () => {
  const currentPath = useLocation().pathname

  return (
    <Container>
      <header>
        <span>LOGO</span>

        <nav>
          <ul>
            <li>
              <Link to="/" $active={currentPath === '/'}>
                <AiOutlineHome />
              </Link>
            </li>
            <li>
              <Link to="/calendar" $active={currentPath === '/calendar'}>
                <AiOutlineCalendar />
              </Link>
            </li>
          </ul>
          {/* <DialogDemo /> */}
        </nav>
      </header>
    </Container>
  )
}
