import { motion } from 'framer-motion'
import styled from 'styled-components'

export const WeeklyCalendarContainer = styled.div`
  width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.75rem;
  }
`

type SelectedDateProps = {
  $isActive: boolean
}

export const SelectedDate = styled(motion.div)<SelectedDateProps>`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  > strong {
    color: ${(props) =>
      props.$isActive ? props.theme['gray-100'] : props.theme['gray-300']};
    font-size: 4.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span {
      color: ${(props) => props.theme['gray-300']};
      text-transform: capitalize;
      line-height: 1.6;
    }
  }
`
type ControlsProps = {
  isToday: boolean
}

export const Controls = styled.div<ControlsProps>`
  button:first-child {
    border: 0;
    background: ${(props) => props.theme['blue-dark']};
    border-radius: 4px;
    text-align: center;
    padding: 0.75rem;
    font-weight: 500;
    color: ${(props) => props.theme.white};
    font-weight: bold;
    font-size: 0.75rem;
    cursor: pointer;

    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.blue};
      color: white;
      transition: background-color 0.2s, color 0.2s;
    }
  }
`
export const WeekDaysContainer = styled.div`
  width: 550px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
`
type WeekDayVariants = {
  $isToday: boolean
  $active: boolean
}

export const WeekDay = styled(motion.button)<WeekDayVariants>`
  all: unset;
  /* background-color: ${(props) => props.theme['orange-dark']}; */

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  position: relative;
  padding: 0.875rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;

  background: ${(props) =>
    props.$active ? props.theme.blue : props.theme.input};

  color: ${(props) =>
    props.$active ? props.theme['gray-100'] : props.theme['gray-300']};

  font-weight: ${(props) => props.$active && 'bold'};

  span:first-child {
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: ${(props) => props.$active && 'bold'};
  }

  span:last-child {
    font-weight: 700;
  }

  /* &::before {
    content: '';
    width: 8px;
    height: 8px;
    position: absolute;
    top: -0.25rem;
    background: ${(props) => props.$isToday && props.theme.orange};
    border-radius: 50%;
  } */

  &:hover {
    transform: translateY(-0.5rem);
  }
`
export const WeekContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* gap: 1rem; */

  button:first-child {
  }
  svg {
    font-size: 3rem;
    color: ${(props) => props.theme['gray-400']};
  }
`
export const PreviousWeekButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  line-height: 0;
  /* width: 100%; */
`

export const NextWeekButton = styled.button`
  background: transparent;
  border: none;
  line-height: 0;
  cursor: pointer;
  /* width: 100%; */
`
