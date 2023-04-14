import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 10rem;

  > span {
    color: ${(props) => props.theme['gray-100']};
    font-weight: bold;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.75rem;
    height: 2.75rem;

    background: ${(props) => props.theme.input};
    border-radius: 8px;
    cursor: pointer;
    border: 0;

    color: ${(props) => props.theme['green-600']};
    line-height: 0;
    font-size: 1rem;
  }
`
