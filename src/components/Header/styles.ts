import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  span {
    color: white;
  }

  > header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    max-width: 1440px;
    padding: 1.5rem 1.5rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

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
  width: 3rem;
  height: 3rem;

  transition: color 0.2s ease, border-color 0.2s ease;

  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-bottom-color: ${(props) => props.active && props.theme['green-600']};

  color: ${(props) =>
    props.active ? props.theme['green-600'] : props.theme['gray-300']};

  font-size: 1.5rem;

  &:hover {
    border-bottom-color: ${(props) => props.theme['green-600']};
  }
`
