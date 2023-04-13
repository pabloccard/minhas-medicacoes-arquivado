import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import {
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogClose,
} from './styles'
import { MultStepForm } from '../MultiStepMedicationScheduleForm'

export const DialogDemo = () => {
  return (
    <Dialog.Root>
      <DialogTrigger asChild>
        <button>Nova medicação</button>
      </DialogTrigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <Dialog.Title className="DialogTitle">
            Agende uma nova medicação
          </Dialog.Title>
          <MultStepForm />

          <DialogClose asChild>
            <button className="IconButton" aria-label="Close">
              <X />
            </button>
          </DialogClose>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
