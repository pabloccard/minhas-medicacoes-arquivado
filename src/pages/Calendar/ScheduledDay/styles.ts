import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 65px;
  height: 75px;

  background: ${(props) => props.theme['gray-500']};
  border: 0;
  border-radius: 6px;

  strong {
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-300']};
  }
`
