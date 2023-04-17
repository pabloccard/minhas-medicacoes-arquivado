import styled from 'styled-components'

export const Container = styled.div`
  padding: 4rem 0rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  &::before {
    content: '';
    position: absolute;
    z-index: -100;
    width: 100vw;
    height: 283px;
    background: ${(props) => props.theme['gray-700']};
    top: 0;
    left: 0;
  }
`
