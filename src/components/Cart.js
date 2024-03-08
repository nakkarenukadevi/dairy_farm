import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    let { cartItems } = useSelector((state) => state.product)
    console.log(cartItems)
    return (
        <div className='  absolute top-20 left-28  w-full justify-center items-center'>{
            cartItems.map((item) => {
                return <div className='py-10 contents text-lg font-sans font-bold' key={item.id}>
                    <div className='py-10 grid-cols-1'><img src={item.image} style={{ width: "100px", height: "100px" }} /></div>
                    <div>{item.name}</div>
                    <div className='text-red-500'>Rs / - {item.price}</div>
                    <div className=''>Qty - {item.quantity}</div>
                    <div>
                        <button className='bg-green-700  px-4 py-2 rounded-lg text-white'>Buy Now</button></div>
                </div>
            })
        }</div>
    )
}

export default Cart