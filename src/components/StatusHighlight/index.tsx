import { isPast } from 'date-fns'
import { Container } from './styles'

type StatusHighlightProps = {
  dateTime: Date
  ingested: boolean
}

export const StatusHighlight = ({
  dateTime,
  ingested = false,
}: StatusHighlightProps) => {
  function checkStatus() {
    const late = isPast(dateTime)

    if (ingested) {
      return 'ingerido'
    }

    if (late && !ingested) {
      return 'atrasado'
    }

    if (!late && !ingested) {
      return 'aguardando'
    }
  }

  const status = checkStatus()

  return <Container status={status}>{status}</Container>
}
