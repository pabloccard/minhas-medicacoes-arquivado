import { ScheduleType } from '../../types/Schedule'
import { SchedulesContext } from '../../contexts/ScheduleContext'
import { SelectedDateContext } from '../../contexts/SelectedDateContext'
import { time } from '../../utils/formatter'
import { intlFormat, isPast, isFuture } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import { Container, Table } from './styles'
import { StatusHighlight } from '../StatusHighlight'

export const MedicationList = () => {
  const { selectedDate } = useContext(SelectedDateContext)
  const { findSchedules } = useContext(SchedulesContext)

  const [schedules, setSchedules] = useState<ScheduleType[]>()

  console.log(isFuture(new Date()))
  useEffect(() => {
    const schedules = findSchedules(selectedDate)
    setSchedules(schedules)
  }, [findSchedules, selectedDate])

  return (
    <Container>
      <Table style={{ width: '100%' }}>
        <tbody>
          {schedules?.map((schedule) => (
            <tr key={schedule.id}>
              <td></td>
              <td>{schedule.title}</td>
              <td>
                {intlFormat(new Date(schedule.datetime), {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </td>
              <td>
                <StatusHighlight
                  dateTime={schedule.datetime}
                  ingested={schedule.ingested}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}
