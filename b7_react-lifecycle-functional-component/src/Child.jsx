import React, { useEffect } from 'react'

const Child = () => {

  useEffect(()=>{

    return(()=> {
      alert("Bye bye");
    })
  })
  
  return (
    <h1>Child Component</h1>
  )
}

export default Child