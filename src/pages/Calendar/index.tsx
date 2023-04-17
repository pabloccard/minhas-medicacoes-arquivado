// import { MedicationList } from '../../components/MedicationList'
// import { WeeklyCalendar } from '../../components/WeeklyCalendar'
import { EventTable } from './EventTable'

// import { ScheduledDay } from './ScheduledDay/indedx'
import { ScheduledDayList } from './ScheduledDayList'
import { SelectedDate } from './SelectedDate'
import { Container } from './styles'

export function Calendar() {
  return (
    <Container>
      {/* <WeeklyCalendar /> */}
      {/* <MedicationList /> */}
      <SelectedDate />
      <ScheduledDayList />
      <EventTable />
    </Container>
  )
}
