import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    img {
      transform: rotateY(180deg);
      width: 380px;
    }
  }

  button[type='submit'] {
    all: unset;

    background-color: ${(props) => props.theme['green-600']};
    padding: 1rem;
    border-radius: 8px;
    cursor: pointer;

    color: ${(props) => props.theme.white};
    font-weight: bold;
    text-align: center;
  }
`

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  label {
    display: block;
    color: ${(props) => props.theme['gray-300']};
    margin-bottom: 0.5rem;
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
  input[type='time']::-webkit-calendar-picker-indicator,
  input[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(23%) sepia(85%) saturate(5078%) hue-rotate(155deg)
      brightness(99%) contrast(90%);
    font-weight: bold;
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
  color: ${(props) => props.theme['green-600']};
  border-radius: 8px;
  transition: color ease 0.2s, background-color ease 0.2s;

  &[data-state='checked'] {
    background: ${(props) => props.theme['green-600']};
    color: ${(props) => props.theme.white};
  }
`
