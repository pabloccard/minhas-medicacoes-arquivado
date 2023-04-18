import { useContext } from 'react'
import { ScheduledDay } from '../ScheduledDay/indedx'
import * as S from './styles'
import { SchedulesContext } from '../../../contexts/ScheduleContext'
import { isSameDay } from 'date-fns'
import { SelectedDateContext } from '../../../contexts/SelectedDateContext'

export const ScheduledDayList = () => {
  const { schedules, findSchedules } = useContext(SchedulesContext)

  const scheduledDays: Date[] = schedules.reduce(
    (acc, schedule) => {
      const exists = acc.some((el) =>
        isSameDay(el, new Date(schedule.datetime)),
      )

      if (!exists) {
        acc.push(new Date(schedule.datetime))
      }

      return acc
    },
    [new Date(schedules[0].datetime)],
  )

  console.log(scheduledDays)

  return (
    <S.Container>
      {scheduledDays.map((el) => (
        <ScheduledDay key={String(el)} date={el} />
      ))}
    </S.Container>
  )
}
