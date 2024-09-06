import React from 'react'

const Footer = () => {
    const year = new Date(Date.now()).getFullYear()
  return (
    <div className='footer-style'>
      <span>© Manas Tewari {year}</span>
    </div>
  )
}

export default Footer
