import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  > strong {
    color: ${(props) => props.theme['gray-200']};
    font-size: 3.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span {
      color: ${(props) => props.theme['gray-200']};
      text-transform: capitalize;
      line-height: 1.6;
      font-size: 0.875rem;
    }
  }
`
