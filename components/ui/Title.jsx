import React from 'react'

const Title = ({children, addClass}) => {
  return (
    <div className={`title ${addClass}`}>{ children }</div>
  )
}

export default Title