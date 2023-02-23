import styled from 'styled-components'

export const Container = styled.div`
  padding: 4rem 0rem;

  h3 {
    color: ${(props) => props.theme['gray-200']};
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`
