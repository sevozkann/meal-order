import React from 'react'
import Carousel from '../../components/Carousel'
import Campaign from '../../components/Campaign'
import MenuWrapper from '../../components/products/MenuWrapper'
import About from '../../components/About'

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaign />
      <MenuWrapper />
      <About />
    </div>
  )
}

export default Index