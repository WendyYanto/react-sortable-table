import TableItem from './table-item'
import TableHeader from './table-header'
import { useState } from 'react'

const ITEMS = [
  {
    name: 'Wendy',
    age: 18,
    hobby: 'Football',
  },
  {
    name: 'Anthony',
    age: 20,
    hobby: 'Basketball',
  },
  {
    name: 'Candy',
    age: 28,
    hobby: 'Eating',
  },
  {
    name: 'Zedd',
    age: 10,
    hobby: 'Studying',
  },
  {
    name: 'Cendy',
    age: 68,
    hobby: 'Eating',
  },
  {
    name: 'Zidd',
    age: 50,
    hobby: 'Studying',
  },
]

function Table() {
  const [items, setItems] = useState([...ITEMS])

  const renderItems = () => {
    return items.map((item) => (
      <TableItem
        key={item.name}
        name={item.name}
        age={item.age}
        hobby={item.hobby}
      />
    ))
  }

  const onSort = (sortBy, isASC) => {
    if (sortBy === 'NAME') {
      sortByName(isASC)
    } else if (sortBy === 'AGE') {
      sortByAge(isASC)
    } else if (sortBy === 'HOBBY') {
      sortByHobby(isASC)
    }
  }

  function sortByName(isASC) {
    const newItems = items.sort((first, second) => {
      if (isASC) {
        return first.name > second.name ? 1 : -1
      } 
      return first.name > second.name ? -1 : 1
    })
    setItems([...newItems])
  }

  function sortByAge(isASC) {
    const newItems = items.sort((first, second) => {
      if (isASC) {
        return first.age > second.age ? 1 : -1
      } 
      return first.age > second.age ? -1 : 1
    })
    setItems([...newItems])
  }

  function sortByHobby(isASC) {
    const newItems = items.sort((first, second) => {
      if (isASC) {
        return first.hobby > second.hobby ? 1 : -1
      } 
      return first.hobby > second.hobby ? -1 : 1
    })
    setItems([...newItems])
  }

  return (
    <table border="1">
      <thead>
        <TableHeader onSort={onSort} />
      </thead>
      <tbody>{renderItems()}</tbody>
    </table>
  )
}

export default Table