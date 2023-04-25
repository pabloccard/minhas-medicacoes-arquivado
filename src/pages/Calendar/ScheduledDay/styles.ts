import styled from 'styled-components'

type Props = {
  $active: boolean
}

export const Container = styled.button<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 4.25rem;
  height: 4.75rem;

  background: ${(props) =>
    props.$active ? props.theme['green-600'] : props.theme['gray-500']};
  border: 0;
  border-radius: 6px;

  transform: ${(props) => props.$active && 'translateY(-10%)'};

  transition: all ease-in-out 0.2s;

  strong {
    text-transform: uppercase;
    color: ${(props) =>
      props.$active ? props.theme.white : props.theme['gray-300']};
  }
`
