import { useState } from 'react'

const UP_UNICODE = '&#8593;'
const DOWN_UNICODE = '&#8595;'
const UP_AND_DOWN_UNICODE = '&#8693;'

const TABS = [
  {
    key: 'NAME',
    title: 'NAME',
    unicode: UP_AND_DOWN_UNICODE,
  },
  {
    key: 'AGE',
    title: 'Age',
    unicode: UP_AND_DOWN_UNICODE,
  },
  {
    key: 'HOBBY',
    title: 'Hobby',
    unicode: UP_AND_DOWN_UNICODE,
  },
]

function TableHeader(props) {
  const { onSort } = props
  const [tabs, setTabs] = useState([...TABS])
  const [isASC, setASC] = useState(false)

  const onClick = (sortBy) => {
    setASC(!isASC)
    onSort(sortBy, isASC)
    updateTabs(sortBy)
  }

  function updateTabs(sortBy) {
    const newTabs = tabs.map((tab) => {
      const ascUnicode = isASC ? UP_UNICODE : DOWN_UNICODE
      const unicode = tab.key === sortBy ? ascUnicode : UP_AND_DOWN_UNICODE

      return {
        ...tab,
        unicode
      }
    })

    setTabs([...newTabs])
  }

  const renderItems = () => {
    return tabs.map((tab) => {
      return (
        <th
          key={tab.key}
          onClick={() => onClick(tab.key)}
          dangerouslySetInnerHTML={{ __html: `${tab.title} ${tab.unicode}` }}
        ></th>
      )
    })
  }

  return <tr>{renderItems()}</tr>
}

export default TableHeader
