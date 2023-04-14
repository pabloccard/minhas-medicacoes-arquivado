import { useContext } from 'react'
import { FormDataContext } from '../../../contexts/FormDataContext'
import * as S from '../styles'
import * as Dialog from '@radix-ui/react-dialog'
import { SchedulesContext } from '../../../contexts/ScheduleContext'

type ReviewingDataStepProps = {
  currentStep: number
  changeStep(step: number): void
}

export const ReviewingDataStep = ({
  changeStep,
  currentStep,
}: ReviewingDataStepProps) => {
  const { createSchedule } = useContext(SchedulesContext)

  const { data } = useContext(FormDataContext)

  function handleCreateSchedule() {
    createSchedule(data)
  }

  const { title, durationInDays, intervalInHours, startDate, startTime } = data
  return (
    <S.ReviewingContainer>
      <span>
        <strong>Medicamento: </strong> {title}
      </span>
      <span>
        <strong>Duração do tratamento: </strong>
        {`${durationInDays} em ${durationInDays}`}
      </span>
      <span>
        <strong>intervalo de horas: </strong> {`${intervalInHours} horas`}
      </span>
      <span>
        <strong>Início do tratamento: </strong> {startDate}
      </span>
      <span>
        <strong>Primeira dose: </strong> {startTime}
      </span>
      <S.Controls>
        <button onClick={() => changeStep(currentStep - 1)}>Voltar</button>
        <Dialog.Close onClick={handleCreateSchedule}>Agendar</Dialog.Close>
      </S.Controls>
    </S.ReviewingContainer>
  )
}
