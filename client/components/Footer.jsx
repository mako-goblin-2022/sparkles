import React from 'react'

const Footer = () => {

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <footer>
      <button onClick={refreshPage}>Reset</button>
    </footer>
  )
}

export default Footer