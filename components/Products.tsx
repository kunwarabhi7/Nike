import React from 'react'
import Product from './Product'

type Props = {}

const Products = (props: Props) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-1  max-w-7xl md:mx-8 sm:gap-2 md:gap-3 '>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
    </div>
  )
}

export default Products