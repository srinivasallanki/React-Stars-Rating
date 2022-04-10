import { useState, Fragment } from 'react'
import { FaStar } from 'react-icons/fa'

const createArray = (length) => [...Array(length)]

function Star({ selected = false, onSelect }) {
  return (
    <FaStar
      style={{ fontSize: '30px' }}
      color={selected ? 'red' : 'gray'}
      onClick={onSelect}
    />
  )
}

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0)

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <h2>
        {selectedStars} of {totalStars}
      </h2>
    </>
  )
}

function App() {
  return (
    <div className='App'>
      <StarRating />
    </div>
  )
}

export default App
