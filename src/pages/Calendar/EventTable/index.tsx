import { useContext, useEffect, useState } from 'react'
import * as S from './styles'
import { SchedulesContext } from '../../../contexts/ScheduleContext'
import { SelectedDateContext } from '../../../contexts/SelectedDateContext'
import { ScheduleType } from '../../../types/Schedule'

import { intlFormat } from 'date-fns'
import { StatusHighlight } from '../StatusHighlight'
import { Check } from 'phosphor-react'

export const EventTable = () => {
  const { selectedDate } = useContext(SelectedDateContext)
  const { findSchedules, markAsIngested } = useContext(SchedulesContext)

  const [schedules, setSchedules] = useState<ScheduleType[]>([])

  useEffect(() => {
    const schedules = findSchedules(selectedDate)
    setSchedules(schedules)
  }, [findSchedules, selectedDate])

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <th></th>
            <th>medicamento</th>
            <th>horário</th>
            <th>status</th>
          </tr>
        </thead>

        <tbody>
          {schedules.map(({ id, title, datetime, ingested }) => (
            <tr key={id}>
              <td>
                <S.CheckboxRoot
                  onCheckedChange={() => markAsIngested(id)}
                  checked={ingested}
                >
                  <S.CheckboxIndicator>
                    {/* <Check weight="bold" /> */}V
                  </S.CheckboxIndicator>
                </S.CheckboxRoot>
              </td>
              <td>{title}</td>
              <td>
                {intlFormat(new Date(datetime), {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </td>
              <td style={{ textAlign: 'center' }}>
                <StatusHighlight dateTime={datetime} ingested={ingested} />
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  )
}
