import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <p>Thanh dung chung cho top about</p>
      {children}
      <p>Thanh dung chung cho bottom about</p>
    </div>
  )
}

export default layout