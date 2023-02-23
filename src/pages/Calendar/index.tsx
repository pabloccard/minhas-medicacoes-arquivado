import { MedicationList } from '../../components/MedicationList'
import { WeeklyCalendar } from '../../components/WeeklyCalendar'
import { Container } from './styles'

export function Calendar() {
  return (
    <Container>
      <WeeklyCalendar />
      <MedicationList />
    </Container>
  )
}
