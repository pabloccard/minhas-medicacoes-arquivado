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
  return (
    <S.ReviewingContainer>
      {/* <span>
        <strong>Medicamento: {title}</strong>
      </span>
      <span>
        <strong>
          Duração do tratamento: {`${durationInDays} em ${durationInDays}`}
        </strong>
      </span>
      <span>
        <strong>intervalo de horas:{`${intervalInHours} horas`}</strong>
      </span>
      <span>
        <strong>Início do tratamento:{startDate}</strong>
      </span>
      <span>
        <strong>Primeira dose:{startTime}</strong>
      </span> */}
      <S.Controls>
        <button onClick={() => changeStep(currentStep - 1)}>Voltar</button>
        <Dialog.Close onClick={handleCreateSchedule}>Agendar</Dialog.Close>
      </S.Controls>
    </S.ReviewingContainer>
  )
}
