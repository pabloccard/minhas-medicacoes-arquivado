import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormDataContext } from '../../../contexts/FormDataContext'
import { DayStepper } from '../../DayStepper'
import * as S from '../styles'

type DurationStepProps = {
  currentStep: number
  changeStep(step: number): void
}
const durationSchemaValidation = z.object({
  durationInDays: z.number(),
})

type FormData = z.infer<typeof durationSchemaValidation>

export const DurationStep = ({
  changeStep,
  currentStep,
}: DurationStepProps) => {
  const { setValue, data } = useContext(FormDataContext)

  const { handleSubmit, control } = useForm<FormData>({
    resolver: zodResolver(durationSchemaValidation),
    defaultValues: {
      durationInDays: data.durationInDays,
    },
  })

  function submit({ durationInDays }: FormData) {
    setValue('durationInDays', durationInDays)
    changeStep(currentStep + 1)
  }
  return (
    <S.Container onSubmit={handleSubmit(submit)}>
      <fieldset>
        <label htmlFor="duration">Duração do tratamento?</label>
        <Controller
          control={control}
          name="durationInDays"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <DayStepper value={value} onValueChange={onChange} />
          )}
        />
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
