import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

export const Container = styled.div`
  width: 680px;
  margin: 0 auto;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  min-width: 600px;

  th {
    /* background-color: ${(props) => props.theme['gray-500']}; */
    padding: 0 0.875rem;
    text-align: left;
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.875rem;
    /* line-height: 1.6; */

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
      color: ${(props) => props.theme.purple};
    }
  }

  td {
    background-color: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-300']};
    padding: 0.875rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      width: 5%;
      padding-left: 1.5rem;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      padding-right: 1.5rem;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      color: ${(props) => props.theme['green-600']};
    }
  }
`
export const CheckboxRoot = styled(Checkbox.Root)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme['green-600']};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  cursor: pointer;
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme['gray-200']};
`

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  p {
    color: ${(props) => props.theme['gray-300']};
    font-size: 1.25rem;
    text-align: center;
    font-weight: bold;
  }

  img {
    width: 240px;
    opacity: 0.9;
  }
`
