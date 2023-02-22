import styled from 'styled-components'

export const Hero = styled.section`
  display: flex;
  align-items: center;

  h1 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 36px;
  }
  p {
    color: ${(props) => props.theme['gray-300']};
  }

  img {
    /* height: 520px; */
    width: 480px;
  }
`

export const Content = styled.div``
