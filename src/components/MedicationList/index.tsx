import { ScheduleType } from '../../types/Schedule'
import { SchedulesContext } from '../../contexts/ScheduleContext'
import { SelectedDateContext } from '../../contexts/SelectedDateContext'
import { time } from '../../utils/formatter'
import { intlFormat, isPast, isFuture } from 'date-fns'
import { useContext, useEffect, useState } from 'react'
import {
  CheckboxIndicator,
  CheckboxRoot,
  Container,
  Table,
  Empty,
} from './styles'
import { StatusHighlight } from '../StatusHighlight'
import { Checks, Check } from 'phosphor-react'

export const MedicationList = () => {
  const { selectedDate } = useContext(SelectedDateContext)
  const { findSchedules, markAsIngested } = useContext(SchedulesContext)

  const [schedules, setSchedules] = useState<ScheduleType[]>()

  useEffect(() => {
    const schedules = findSchedules(selectedDate)
    setSchedules(schedules)
  }, [findSchedules, selectedDate])

  return (
    <Container>
      {schedules?.length > 0 ? (
        <Table style={{ width: '100%' }}>
          <tbody>
            {schedules?.map((schedule) => (
              <tr key={schedule.id}>
                <td>
                  <CheckboxRoot
                    onCheckedChange={() => markAsIngested(schedule.id)}
                    checked={schedule.ingested}
                  >
                    <CheckboxIndicator>
                      <Check />
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
      ) : (
        <Empty>
          <img src="src/assets/pharmacist-cuate.svg" alt="" />
          <p>
            Nenhum medicamento para hoje! <br />
          </p>
        </Empty>
      )}
    </Container>
  )
}
