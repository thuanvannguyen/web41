import React, { useContext } from 'react'
import MyStore from './store'

const Test = () => {
  const number = useContext(MyStore);
  console.log(number);

  return (
    <h1>{number}</h1>
  )
}

export default Test

// Main  -> Parent -> Childrent -> Test