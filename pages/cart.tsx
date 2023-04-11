import Image from 'next/image'
import React from 'react'

type Props = {}

const Cart = (props: Props) => {
  return (
    <div className='py-20 text-black w-full  flex  item-center justify-between'>
        <div className='text-xl '>
            <p> BAg</p>
        <div className=' flex shadow-md p-2 border '>
            <div><Image src='https://secure-images.nike.com/is/image/DotCom/CD7069_101?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg' alt='cart' width={50} height={50}/></div>
            <div className='w-full'>
                <div className='flex'>
                <p>
Air Jordan Legacy 312 Low</p>
<p>MRP: ₹ 12 995.00</p>
                </div>
                <p>Men's Shoes</p>
                <p>Summit White/Tech Grey/Black/Fire Red</p>
                <div className='flex'>
                    <p>Size 8</p>
                    <p>Quantity 1</p>
                </div>
                <div className='flex'>
                    <p>Love</p>
                    <p>Delete</p>
                </div>
            </div>
        </div>
        </div>
        <div className='text-xl'>Summary</div>
    </div>
  )
}

export default Cart