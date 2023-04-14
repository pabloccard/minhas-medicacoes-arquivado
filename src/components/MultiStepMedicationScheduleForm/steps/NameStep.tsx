import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormDataContext } from '../../../contexts/FormDataContext'
import * as S from '../styles'

type NameStepProps = {
  currentStep: number
  changeStep(step: number): void
}

const titleSchemaValidation = z.object({
  title: z.string().min(3),
})

type FormData = z.infer<typeof titleSchemaValidation>

export const NameStep = ({ changeStep, currentStep }: NameStepProps) => {
  const { setValue, data } = useContext(FormDataContext)

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(titleSchemaValidation),
    defaultValues: {
      title: data.title,
    },
  })

  function submit(data: FormData) {
    setValue('title', data.title)
    changeStep(currentStep + 1)
  }

  return (
    <div>
      <S.Container onSubmit={handleSubmit(submit)}>
        <fieldset>
          <label htmlFor="medicationName">Qual o nome do medicamento?</label>
          <input
            {...register('title')}
            type="text"
            id="medicationName"
            placeholder="Amoxicilina"
          />
        </fieldset>

        <S.Controls>
          <button type="submit">Avançar</button>
        </S.Controls>
      </S.Container>
    </div>
  )
}
