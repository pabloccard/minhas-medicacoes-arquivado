import { format } from 'date-fns'
import { ReactNode, useState } from 'react'
import { FormDataContext } from '.'
import { FormDataType } from '../../types/FormData'

const defaultFormData: FormDataType = {
  title: 'Pablo',
  durationInDays: 7,
  intervalInHours: '12',
  startTime: '08:00',
  startDate: format(new Date(), 'yyyy-MM-dd'),
}

export const FormDataContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [data, setData] = useState<FormDataType>(defaultFormData)

  type FormValues<T> = Record<
    keyof T,
    T[keyof T] extends string
      ? string
      : T[keyof T] extends number
      ? number
      : any
  >

  function setValue<K extends keyof FormDataType>(
    key: K,
    value: FormValues<FormDataType>[K],
  ) {
    setData((prev) => {
      return {
        ...prev,
        [key]: value,
      }
    })
  }

  return (
    <FormDataContext.Provider value={{ data, setValue }}>
      {children}
    </FormDataContext.Provider>
  )
}
