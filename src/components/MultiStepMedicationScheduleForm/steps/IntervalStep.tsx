import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormDataContext } from '../../../contexts/FormDataContext'
import * as S from '../styles'

type IntervalStepProps = {
  currentStep: number
  changeStep(step: number): void
}
const intervalSchemaValidation = z.object({
  intervalInHours: z.string(),
})

type FormData = z.infer<typeof intervalSchemaValidation>

export const IntervalStep = ({
  changeStep,
  currentStep,
}: IntervalStepProps) => {
  const { setValue, data } = useContext(FormDataContext)

  const { handleSubmit, control } = useForm<FormData>({
    resolver: zodResolver(intervalSchemaValidation),
    defaultValues: {
      intervalInHours: data.intervalInHours,
    },
  })

  function setData({ intervalInHours }: FormData) {
    setValue('intervalInHours', intervalInHours)
    changeStep(currentStep + 1)
  }
  return (
    <S.Container onSubmit={handleSubmit(setData)}>
      <label htmlFor="interval">Qual o intervalo de horas?</label>
      <Controller
        control={control}
        name="intervalInHours"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <S.RadioGroupRoot value={value} onValueChange={onChange}>
            <S.RadioGroupItem value="8">8h</S.RadioGroupItem>
            <S.RadioGroupItem value="10">10h</S.RadioGroupItem>
            <S.RadioGroupItem value="12">12h</S.RadioGroupItem>
          </S.RadioGroupRoot>
        )}
      />

      <S.Controls>
        <button type="submit" onClick={() => changeStep(currentStep - 1)}>
          Voltar
        </button>
        <button type="submit">Avançar</button>
      </S.Controls>
    </S.Container>
  )
}
