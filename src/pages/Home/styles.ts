import styled from 'styled-components'

export const Container = styled.div`
  padding: 4.5rem 1.5rem 6rem;
`

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.5rem;

  h1 {
    color: ${(props) => props.theme['gray-200']};
    font-size: 2.625rem;
    font-weight: 900;
    line-height: 1.1;
    text-align: center;

    span {
      color: ${(props) => props.theme['green-600']};
    }
  }

  p {
    color: ${(props) => props.theme['gray-300']};
    font-size: 18px;
    text-align: center;
  }

  img {
    width: 220px;
  }
`
