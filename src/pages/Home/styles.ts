import styled from 'styled-components'

export const Container = styled.div``

export const Hero = styled.section`
  display: flex;
  align-items: center;

  padding: 6.875rem 0rem;

  h1 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 900;
    line-height: 1.1;
  }
  p {
    color: ${(props) => props.theme['gray-300']};
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }

  a {
    button {
      padding: 1.25rem 4rem;
      background-color: ${(props) => props.theme['green-600']};
      text-decoration: none;
      border-radius: 100px;
      cursor: pointer;

      color: white;
      font-weight: 700;
      font-size: 1.25rem;
      border: 0;
      line-height: 1.3;

      &:hover {
        background-color: ${(props) => props.theme['green-500']};
        transition: background-color 0.2s ease;
      }
    }
  }

  img {
    width: 480px;
  }
`

export const Content = styled.div``
