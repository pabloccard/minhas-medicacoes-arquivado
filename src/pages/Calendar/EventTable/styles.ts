import styled from 'styled-components'

export const Container = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  th {
    background-color: ${(props) => props.theme.input};
    padding: 0.5rem 0.875rem;
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
    padding: 0.875rem;
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      width: 5%;
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
      color: ${(props) => props.theme['green-600']};
    }
  }
`
