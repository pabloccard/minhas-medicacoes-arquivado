import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  border-bottom: 1px solid ${(props) => props.theme['gray-500']};

  span {
    color: white;
  }

  > header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    max-width: 1120px;
    padding: 0 1.5rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 5rem;

    img {
      width: 3rem;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 1rem;

      ul {
        list-style: none;
        display: flex;
        gap: 2rem;
      }

      > a {
        text-decoration: none;
        color: ${(props) => props.theme['gray-100']};
        padding: 0.875rem 1rem;
        border: 1px solid ${(props) => props.theme.orange};
        font-weight: bold;
        font-size: 0.75rem;
        border-radius: 8px;
        transition: background-color 0.2s ease;

        &:hover {
          background: ${(props) => props.theme.orange};
        }
      }
    }
  }
`
type LinkProps = {
  active: boolean
}

export const Link = styled(NavLink)<LinkProps>`
  text-decoration: none;
  transition: color 0.2s ease;
  color: ${(props) =>
    props.active ? props.theme['gray-100'] : props.theme['gray-300']};
`
