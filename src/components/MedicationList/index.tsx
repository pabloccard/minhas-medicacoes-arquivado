import { ScheduleType } from '../../types/Schedule'
import { SchedulesContext } from '../../contexts/ScheduleContext'
import { SelectedDateContext } from '../../contexts/SelectedDateContext'
import { time, day, month } from '../../utils/formatter'
import { intlFormat } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import {
  CheckboxIndicator,
  CheckboxRoot,
  Container,
  Table,
  Empty,
} from './styles'
import { StatusHighlight } from '../StatusHighlight'
import { Check } from 'phosphor-react'

export const MedicationList = () => {
  const { selectedDate } = useContext(SelectedDateContext)
  const { findSchedules, markAsIngested } = useContext(SchedulesContext)

  const [schedules, setSchedules] = useState<ScheduleType[]>([])

  useEffect(() => {
    const schedules = findSchedules(selectedDate)

    const sortedSchedules = schedules.sort(
      (a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime(),
    )

    setSchedules(sortedSchedules)
  }, [findSchedules, selectedDate])

  return (
    <Container>
      {schedules.length > 0 && (
        <Table style={{ width: '100%' }}>
          <thead>
            <th></th>
            <th>medicação</th>
            <th>horário</th>
            <th>status</th>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.id}>
                <td>
                  <CheckboxRoot
                    onCheckedChange={() => markAsIngested(schedule.id)}
                    checked={schedule.ingested}
                  >
                    <CheckboxIndicator>
                      <Check weight="bold" />
                    </CheckboxIndicator>
                  </CheckboxRoot>
                </td>
                <td>{schedule.title}</td>
                <td>
                  {intlFormat(new Date(schedule.datetime), {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </td>
                <td style={{ width: '20%', textAlign: 'center' }}>
                  <StatusHighlight
                    dateTime={schedule.datetime}
                    ingested={schedule.ingested}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {schedules.length === 0 && (
        <Empty>
          {/* <img src="src/assets/medicine-cuate.svg" alt="" /> */}
          <p>
            {`Nenhuma medicação para ${day(selectedDate)} de ${month(
              selectedDate,
            )}`}
            <br />
          </p>
        </Empty>
      )}
    </Container>
  )
}
