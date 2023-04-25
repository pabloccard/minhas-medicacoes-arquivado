import { useContext } from 'react'
import { SelectedDateContext } from '../../../contexts/SelectedDateContext'
import { shortWeekDay, day } from '../../../utils/formatter'
import * as S from './styles'
import { isSameDay } from 'date-fns'

export const ScheduledDay = ({ date }: { date: Date }) => {
  const { setSelectedDate, selectedDate } = useContext(SelectedDateContext)

  const weekDay = shortWeekDay(date)
  const mothDay = day(date)
  const isSameDate = isSameDay(date, selectedDate)

  return (
    <S.Container onClick={() => setSelectedDate(date)} $active={isSameDate}>
      <strong>{weekDay}</strong>
      <strong>{mothDay}</strong>
    </S.Container>
  )
}
