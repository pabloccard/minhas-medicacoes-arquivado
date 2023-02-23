import styled from 'styled-components'

type StatusVariants = {
  status: 'ingerido' | 'atrasado' | 'aguardando' | undefined
}

export const Container = styled.span<StatusVariants>``
