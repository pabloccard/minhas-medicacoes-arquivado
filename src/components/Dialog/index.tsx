import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { X } from 'phosphor-react'
import {
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogClose,
} from './styles'
import { NewScheduleFormDialog } from '../NewScheduleFormDialog'
import { NameStep } from '../MultiStepMedicationScheduleForm/steps/NameStep'
import { MultStepForm } from '../MultiStepMedicationScheduleForm'

export const DialogDemo = () => {
  return (
    <Dialog.Root>
      <DialogTrigger asChild>
        <button>AGENDAR MEDICAÇÃO</button>
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
