import { useContext } from 'react'
import { SelectedDateContext } from '../../../contexts/SelectedDateContext'
import { shortWeekDay, day } from '../../../utils/formatter'
import * as S from './styles'

export const ScheduledDay = ({ date }: { date: Date }) => {
  const { setSelectedDate } = useContext(SelectedDateContext)

  const weekDay = shortWeekDay(date)
  const mothDay = day(date)

  return (
    <S.Container onClick={() => setSelectedDate(date)}>
      <strong>{weekDay}</strong>
      <strong>{mothDay}</strong>
    </S.Container>
  )
}
