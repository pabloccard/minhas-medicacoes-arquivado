import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormDataContext } from '../../../contexts/FormDataContext'
import * as S from '../styles'

type StartTimeStepProps = {
  currentStep: number
  changeStep(step: number): void
}
const startTimeSchemaValidation = z.object({
  startTime: z.string(),
})

type FormData = z.infer<typeof startTimeSchemaValidation>

export const StartTimeStep = ({
  changeStep,
  currentStep,
}: StartTimeStepProps) => {
  const { setValue, data } = useContext(FormDataContext)

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(startTimeSchemaValidation),
    defaultValues: {
      startTime: data.startTime,
    },
  })

  function submit(data: FormData) {
    setValue('startTime', data.startTime)
    changeStep(currentStep + 1)
  }

  return (
    <S.Container onSubmit={handleSubmit(submit)}>
      <fieldset>
        <label htmlFor="startDate">Horário da primeira dosagem</label>
        <input {...register('startTime')} type="time" id="startTime" />
      </fieldset>

      <S.Controls>
        <button type="submit" onClick={() => changeStep(currentStep - 1)}>
          Voltar
        </button>
        <button type="submit">Avançar</button>
      </S.Controls>
    </S.Container>
  )
}
