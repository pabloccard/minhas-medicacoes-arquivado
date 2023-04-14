import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled.form`
  fieldset {
    border: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  label {
    display: block;
    color: ${(props) => props.theme['gray-300']};
  }

  input[type='time']::-webkit-calendar-picker-indicator,
  input[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(100%) brightness(40%);

    font-weight: bold;
  }

  input::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }

  input {
    background: ${(props) => props.theme.input};
    padding: 0.75rem 1rem;
    border: 0;
    border-radius: 8px;
    cursor: pointer;

    width: 10rem;
    height: 2.75rem;

    color: ${(props) => props.theme['gray-100']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
`
export const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-top: 2.5rem;

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
    border-color: ${(props) => props.theme['green-600']};
  }

  button:last-child {
    background: ${(props) => props.theme['green-600']};
    grid-column: 2;
  }
`
export const RadioGroupRoot = styled(RadioGroup.Root)`
  /* width: 10rem; */
  display: flex;
  gap: 0.5rem;
`

export const RadioGroupItem = styled(RadioGroup.Item)`
  all: unset;
  width: 2.75rem;
  height: 2.75rem;

  text-align: center;
  font-weight: bold;
  cursor: pointer;
  background: ${(props) => props.theme.input};

  color: ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  transition: color ease 0.2s, background-color ease 0.2s;

  &[data-state='checked'] {
    background: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['green-600']};
  }
`
export const ReviewingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  strong {
    color: ${(props) => props.theme['gray-200']};
  }
  span {
    color: ${(props) => props.theme['gray-300']};
  }
`
