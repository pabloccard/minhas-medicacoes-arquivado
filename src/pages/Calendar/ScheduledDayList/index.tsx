import { useContext } from 'react'
import { ScheduledDay } from '../ScheduledDay/indedx'
import * as S from './styles'
import { SchedulesContext } from '../../../contexts/ScheduleContext'
import { isSameDay } from 'date-fns'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export const ScheduledDayList = () => {
  const { schedules } = useContext(SchedulesContext)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 'auto',
      spacing: 8,
    },

    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
    },
  })

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
      <S.Slider ref={sliderRef} className="keen-slider">
        {scheduledDays.map((el) => (
          <ScheduledDay
            key={String(el)}
            date={el}
            className="keen-slider__slide"
          />
        ))}
      </S.Slider>
    </S.Container>
  )
}
