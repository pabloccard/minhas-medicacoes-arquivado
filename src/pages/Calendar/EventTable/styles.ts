import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

export const Container = styled.div`
  padding: 0 1.5rem;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  th {
    background-color: ${(props) => props.theme.input};
    padding: 0.75rem 0.5rem;
    text-align: left;
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.685rem;
    line-height: 1.6;
    text-transform: uppercase;
    /* text-align: center; */

    &:first-child {
      border-top-left-radius: 10px;
      /* border-bottom-left-radius: 8px; */
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 10px;
      /* border-bottom-right-radius: 8px; */
      padding-right: 1.5rem;
    }
  }

  td {
    background-color: ${(props) => props.theme.input};
    color: ${(props) => props.theme['gray-100']};
    padding: 0.875rem 0.5rem;
    font-size: 0.75rem;
    line-height: 1.6;
    /* text-align: center; */

    &:first-child {
      /* width: 5%; */
      padding-left: 1.5rem;
      /* border-top-left-radius: 8px;
      border-bottom-left-radius: 8px; */
    }

    &:nth-child(2) {
      color: ${(props) => props.theme['gray-100']};
    }

    &:last-child {
      padding-right: 1.5rem;
      /* border-top-right-radius: 8px;
      border-bottom-right-radius: 8px; */
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
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['green-opacity']};
  }

  &[data-state='checked'] {
    background: ${(props) => props.theme['green-600']};
  }
  &[data-state='checked']:hover {
    background: ${(props) => props.theme['green-600']};
    border-color: ${(props) => props.theme['green-600']};
  }
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme.white};
`
