import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormDataContext } from '../../../contexts/FormDataContext'
import * as S from '../styles'

type StartDateStepProps = {
  currentStep: number
  changeStep(step: number): void
}

const startDateSchemaValidation = z.object({
  startDate: z.string(),
})

type FormData = z.infer<typeof startDateSchemaValidation>

export const StartDateStep = ({
  changeStep,
  currentStep,
}: StartDateStepProps) => {
  const { setValue, data } = useContext(FormDataContext)

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(startDateSchemaValidation),
    defaultValues: {
      startDate: data.startDate,
    },
  })

  function submit(data: FormData) {
    setValue('startDate', data.startDate)
    changeStep(currentStep + 1)
  }
  return (
    <S.Container onSubmit={handleSubmit(submit)}>
      <fieldset>
        <label htmlFor="startDate">Qual a data de início do tratamento?</label>
        <input {...register('startDate')} type="date" id="startDate" required />
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
