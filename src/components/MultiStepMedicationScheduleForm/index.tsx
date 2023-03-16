import { useState } from 'react'

import { DurationStep } from './steps/DurationStep'
import { IntervalStep } from './steps/IntervalStep'
import { NameStep } from './steps/NameStep'
import { ReviewingDataStep } from './steps/ReviewingDataStep'
import { StartDateStep } from './steps/StartDateStep'
import { StartTimeStep } from './steps/StartTimeStep'

const maxSteps = 6

export const MultStepForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)

  function changeStep(step: number) {
    if (step >= 0 && step < maxSteps) {
      setCurrentStep(step)
    }
  }

  const stepComponents = [
    <NameStep key="name" changeStep={changeStep} currentStep={currentStep} />,
    <StartDateStep
      key="startDate"
      changeStep={changeStep}
      currentStep={currentStep}
    />,
    <StartTimeStep
      key="startTime"
      changeStep={changeStep}
      currentStep={currentStep}
    />,
    <DurationStep
      key={'duration'}
      changeStep={changeStep}
      currentStep={currentStep}
    />,
    <IntervalStep
      key={'interval'}
      changeStep={changeStep}
      currentStep={currentStep}
    />,
    <ReviewingDataStep
      key={'review'}
      changeStep={changeStep}
      currentStep={currentStep}
    />,
  ]

  return (
    <div>
      <div>{stepComponents[currentStep]}</div>
    </div>
  )
}
