import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled.form`
  label {
    display: block;
    color: ${(props) => props.theme['gray-300']};
    margin-bottom: 0.5rem;
  }

  input[type='text'] {
    width: 100%;
  }

  input[type='time']::-webkit-calendar-picker-indicator,
  input[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(33%) sepia(92%) saturate(5890%) hue-rotate(172deg)
      brightness(95%) contrast(107%);

    font-weight: bold;
  }

  input {
    background: ${(props) => props.theme.input};
    padding: 0.75rem 1rem;
    border: 0;
    border-radius: 8px;
    cursor: pointer;

    color: ${(props) => props.theme['gray-100']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
`
export const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-top: 2rem;

  button {
    height: 38px;

    border: 1px solid transparent;
    border-radius: 8px;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    cursor: pointer;
  }

  button:first-child {
    background: none;
    border-color: ${(props) => props.theme['blue-dark']};
  }

  button:last-child {
    background: ${(props) => props.theme['blue-dark']};
    grid-column: 2;
  }
`
export const RadioGroupRoot = styled(RadioGroup.Root)`
  width: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`

export const RadioGroupItem = styled(RadioGroup.Item)`
  all: unset;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  background: ${(props) => props.theme.input};
  padding: 0.75rem 0;
  color: ${(props) => props.theme.blue};
  border-radius: 8px;
  transition: color ease 0.2s, background-color ease 0.2s;

  &[data-state='checked'] {
    background: ${(props) => props.theme['blue-dark']};
    color: ${(props) => props.theme.white};
  }
`
export const ReviewingContainer = styled.div`
  strong {
    color: white;
    display: inline-block;
  }
`
