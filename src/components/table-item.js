function TableItem(props) {
  const { name, age, hobby } = props

  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{hobby}</td>
    </tr>
  )
}

export default TableItem
