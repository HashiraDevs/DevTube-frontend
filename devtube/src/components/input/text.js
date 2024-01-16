import { Input } from 'postcss'
import React from 'react'

const Text = ({name, id, type}) => {
  return (
    <input type={type} name={name} id={id} className='bg-red-300'/>
  )
}

export default Text