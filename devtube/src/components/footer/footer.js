import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-600 py-5'>
      copyright &copy; {new Date().getFullYear()}
    </footer>
  )
}

export default Footer