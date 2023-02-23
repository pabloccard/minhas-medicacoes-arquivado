import { NewScheduleForm } from '../../components/NewScheduleForm'
import { Container } from './styles'

export function Create() {
  return (
    <Container>
      <h3>Agende sua nova medicação</h3>
      <NewScheduleForm />
    </Container>
  )
}
