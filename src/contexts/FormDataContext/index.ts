import { createContext } from 'react'
import { FormDataType } from '../../types/FormData'

type FormValues<T> = Record<
  keyof T,
  T[keyof T] extends string ? string : T[keyof T] extends number ? number : any
>

type FormDataContextType = {
  data: FormDataType
  setValue<K extends keyof FormDataType>(
    key: K,
    value: FormValues<FormDataType>[K],
  ): void
}

export const FormDataContext = createContext<FormDataContextType>(null!)
