import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  background-color: red;

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
      color: ${(props) => props.theme['gray-100']};
      text-decoration: none;
    }
  }
`
