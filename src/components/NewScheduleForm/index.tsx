import {
  Container,
  InputsContainer,
  RadioGroupItem,
  RadioGroupRoot,
} from './styles'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useContext } from 'react'
import { SchedulesContext } from '../../contexts/ScheduleContext'
import { DayStepper } from '../DayStepper'
import { format } from 'date-fns'

const newScheduleSchemaValidation = z.object({
  title: z.string().min(3),
  durationInDays: z.number(),
  intervalInHours: z.string(),
  startTime: z.string(),
  startDate: z.string(),
})

type FormData = z.infer<typeof newScheduleSchemaValidation>

export const NewScheduleForm = () => {
  const { createSchedule } = useContext(SchedulesContext)

  const { register, handleSubmit, control } = useForm<FormData>({
    resolver: zodResolver(newScheduleSchemaValidation),
    defaultValues: {
      durationInDays: 7,
      intervalInHours: '12',
      startTime: '08:00',
      startDate: format(new Date(), 'yyyy-MM-dd'),
    },
  })

  function onSubmit(data: FormData) {
    createSchedule(data)
  }
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputsContainer>
          <div style={{ gridColumn: '1/3' }}>
            <label htmlFor="medicationName">Nome do medicamento?</label>
            <input
              {...register('title')}
              type="text"
              id="medicationName"
              placeholder="Fenergan"
            />
          </div>

          <div>
            <label htmlFor="duration">Qual a duração do tratamento?</label>
            <Controller
              control={control}
              name="durationInDays"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <DayStepper value={value} onValueChange={onChange} />
              )}
            />
          </div>

          <div>
            <label htmlFor="interval">Qual o intervalo de horas?</label>
            <Controller
              control={control}
              name="intervalInHours"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <RadioGroupRoot value={value} onValueChange={onChange}>
                  <RadioGroupItem value="8">8h</RadioGroupItem>
                  <RadioGroupItem value="10">10h</RadioGroupItem>
                  <RadioGroupItem value="12">12h</RadioGroupItem>
                </RadioGroupRoot>
              )}
            />
          </div>

          <div>
            <label htmlFor="startDate">
              Qual a data de início do tratamento?
            </label>
            <input
              {...register('startDate')}
              type="date"
              id="startDate"
              required
            />
          </div>

          <div>
            <label htmlFor="startTime">
              Qual o horário da primeira dosagem?
            </label>
            <input
              {...register('startTime')}
              type="time"
              id="startTime"
              required
            />
          </div>
          <button style={{ gridColumn: '1/3' }} type="submit">
            Agendar medicação
          </button>
        </InputsContainer>

        <img src="src/assets/medicine-cuate.svg" alt="" />
      </div>
    </Container>
  )
}
