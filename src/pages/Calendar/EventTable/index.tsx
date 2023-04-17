import * as S from './styles'

export const EventTable = () => {
  return (
    <S.Container>
      <thead>
        <th></th>
        <th>medicamento</th>
        <th>horário</th>
        <th>status</th>
      </thead>

      <tbody>
        <tr>
          <td>x</td>
          <td>Amoxilina</td>
          <td>18:00</td>
          <td style={{ width: '20%', textAlign: 'center' }}>ingerido</td>
        </tr>
      </tbody>
    </S.Container>
  )
}
