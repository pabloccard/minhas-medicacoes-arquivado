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

  const { data, resetData } = useContext(FormDataContext)

  function handleCreateSchedule() {
    createSchedule(data)
    resetData()
  }
  const { title, durationInDays, intervalInHours, startDate, startTime } = data

  const date = Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(`${startDate}T12:00:00Z`))

  return (
    <S.ReviewingContainer>
      <span>
        <strong>Medicamento: </strong> {title}
      </span>
      <span>
        <strong>Duração do tratamento: </strong>
        {`${durationInDays} ${durationInDays > 1 ? 'dias' : 'dia'}`}
      </span>
      <span>
        <strong>intervalo de horas: </strong>{' '}
        {`${intervalInHours} em ${intervalInHours} horas`}
      </span>
      <span>
        <strong>Início do tratamento: </strong> {date}
      </span>
      <span>
        <strong>Primeira dose: </strong> {startTime}
      </span>
      <S.Controls>
        <button onClick={() => changeStep(currentStep - 1)}>Voltar</button>
        <Dialog.Close onClick={handleCreateSchedule} className="last-step">
          Agendar
        </Dialog.Close>
      </S.Controls>
    </S.ReviewingContainer>
  )
}
