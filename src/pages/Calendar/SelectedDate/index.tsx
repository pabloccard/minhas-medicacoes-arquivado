import { useContext } from 'react'
import * as S from './styles'
import { SelectedDateContext } from '../../../contexts/SelectedDateContext'
import { day, month, weekDay, year } from '../../../utils/formatter'

export const SelectedDate = () => {
  const { selectedDate } = useContext(SelectedDateContext)

  const monthDay = day(selectedDate)
  const weekDayName = weekDay(selectedDate)
  const month1 = month(selectedDate)
  const year1 = year(selectedDate)

  return (
    <S.Container>
      <strong>{monthDay}</strong>
      <div>
        <span>{weekDayName}</span>
        <span>{`${month1} | ${year1}`}</span>
      </div>
    </S.Container>
  )
}
