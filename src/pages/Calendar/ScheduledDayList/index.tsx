import { useContext, useEffect, useRef, useState } from 'react'
import { ScheduledDay } from '../ScheduledDay/indedx'
import * as S from './styles'
import { SchedulesContext } from '../../../contexts/ScheduleContext'
import { isSameDay } from 'date-fns'
import 'keen-slider/keen-slider.min.css'

export const ScheduledDayList = () => {
  const { schedules } = useContext(SchedulesContext)
  const carousel = useRef(HTMLElement.arguments)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

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

  return (
    <S.Container>
      <S.Carousel ref={carousel} whileTap={{ cursor: 'grabing' }}>
        <S.Inner drag="x" dragConstraints={{ right: 0, left: -width }}>
          {scheduledDays.map((el) => (
            <S.Item key={String(el)}>
              <ScheduledDay date={el} className="keen-slider__slide" />
            </S.Item>
          ))}
        </S.Inner>
      </S.Carousel>
    </S.Container>
  )
}
