import styled from 'styled-components'

type StatusVariants = {
  status: 'ingerido' | 'atrasado' | 'aguardando' | undefined
}

export const Container = styled.span<StatusVariants>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 3px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  height: 1.25rem;
  width: 100px;

  background-color: ${(props) => {
    if (props.status === 'ingerido') {
      return '  #00A372'
    }

    if (props.status === 'aguardando') {
      return '#0e4d4d'
    }

    if (props.status === 'atrasado') {
      return 'rgb(170, 56, 64)'
    }
  }};

  color: ${(props) => {
    if (props.status === 'ingerido') {
      return ' #a8f4dc'
    }

    if (props.status === 'aguardando') {
      return '#a1d6e2'
    }

    if (props.status === 'atrasado') {
      return 'rgb(237, 173, 160)'
    }
  }};
`
