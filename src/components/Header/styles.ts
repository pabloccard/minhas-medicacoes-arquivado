import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  border-bottom: 1px solid ${(props) => props.theme['gray-500']};

  span {
    color: white;
  }

  > div {
    max-width: 1120px;
    padding: 0 1.5rem;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 5rem;
  }

  nav {
    display: flex;
    gap: 2rem;

    a {
      color: ${(props) => props.theme['gray-300']};
      text-decoration: none;
    }
  }

  button {
    padding: 0.875rem 1rem;
    background: none;
    text-decoration: none;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['green-600']};
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme['green-500']};
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: white;
      font-weight: 700;
      font-size: 0.75rem;

      background-color: blue;

      line-height: 1.3;
    }
  }
`
