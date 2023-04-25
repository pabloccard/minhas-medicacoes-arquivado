import styled from 'styled-components'

export const Container = styled.div`
  padding: 4rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    z-index: -100;
    width: 100vw;
    height: 18.625rem;
    background: ${(props) => props.theme['gray-700']};
    top: 0;
    left: 0;
  }
`
