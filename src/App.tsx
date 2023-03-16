import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { FormDataContextProvider } from './contexts/FormDataContext/FormDataContextProvider'
import { SchedulesContextProvider } from './contexts/ScheduleContext/ScheduleContextProvider'
import { SelectedDateProvider } from './contexts/SelectedDateContext/SelectedDateProvider'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <FormDataContextProvider>
        <SelectedDateProvider>
          <SchedulesContextProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </SchedulesContextProvider>
        </SelectedDateProvider>
      </FormDataContextProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
