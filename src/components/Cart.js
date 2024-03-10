import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    let { cartItems } = useSelector((state) => state.product)
    console.log(cartItems)
    let total = 0
    cartItems.forEach((item) => {
        return total += item.quantity * item.price
    })
    return (
        <div className='  absolute top-20 left-1/4  w-1/2 justify-center items-center'>{
            cartItems.map((item) => {
                return <div className='grid grid-cols-2 py-10   text-lg font-sans  font-bold' key={item.id}>

                    <div className='border-b-2  justify-center flex align-item-center'>

                        <div className='py-10 grid-cols-1'><img src={item.image} style={{ width: "100px", height: "100px" }} /></div>

                    </div>

                    <div className='border-b-2 '>

                        <div>{item.name}</div>
                        <div className='text-red-500'>Rs / - {item.price}</div>
                        <div className=''>Qty - {item.quantity}</div>
                        <div>
                            <button className='bg-green-700  px-4 py-2 rounded-lg text-white'>Buy Now</button>
                        </div>

                    </div>
                </div>

            })
        }
            <div className='grid justify-center items-center font-bold text-2xl mb-5 text-green-900'><div>Total</div> <div>Rs:{total}/-</div> </div>
        </div>
    )
}

export default Cart