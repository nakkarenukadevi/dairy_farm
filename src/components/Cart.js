import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    let { cartItems } = useSelector((state) => state.product)

    return (
        <div className='grid grid-flow-row grid-cols-1 justify-items-center items-center'>{
            cartItems.map((item) => {
                return <div className='py-10 contents text-xl font-sans font-bold'>
                    <div className='py-10'><img src={item.image} /></div>
                    <div>{item.name}</div>
                    <div>Rs/-{item.price}</div>
                </div>
            })
        }</div>
    )
}

export default Cart