import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>Page 404 </h2>
      <button>
        <Link href="/">Return Homepage</Link>
      </button>
    </div>
  )
}

export default NotFound