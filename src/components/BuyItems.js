import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { QtyIncrese } from '../components/store/productSlice'
const BuyItems = () => {
    let { state } = useLocation()
    let { data, buyProduct } = useSelector((state) => state.product);
    let [buyItem, setBuyItem] = useState(state.item)
    let dispatch = useDispatch();

    console.log(buyItem)
    const qtyIncrease = () => {
        if (buyItem.quantity >= 1) {
            setBuyItem({ ...buyItem, quantity: buyItem.quantity + 1 })
        }


    }
    const dicreseQuantity = () => {
        if (buyItem.quantity > 1) {
            setBuyItem({ ...buyItem, quantity: buyItem.quantity - 1 })
        }
    }
    dispatch(QtyIncrese(buyItem))
    return (
        <div className='grid mx-10 lg:justify-start sm:justify-center '>
            <div className=' flex py-10   w-full border-b-2  '>
                <div className='flex  w-20 justify-between font-semibold items-center '><img src={buyItem.image} style={{ widht: "100px", height: "100px" }} /></div>
                <div className='flex  w-20 justify-between font-semibold items-center mx-3'>{buyItem.name}</div>
                <div className='flex  w-20 justify-between font-semibold items-center '>Price: Rs/-{buyItem.price * buyItem.quantity}</div>
                <div className='flex  w-20 justify-between font-semibold items-center '>
                    <div className='text-4xl' onClick={() => dicreseQuantity()}>-</div>
                    <div className='text-xl'>{buyItem.quantity}</div>
                    <div className='text-3xl' onClick={() => qtyIncrease()}>+</div>

                </div>
            </div>
            <div className=' font-bold font-sans '>
                <h1 className='text-xl text-center my-10'>Adderss</h1>
                <div className='my-3'><laber className="px-5">Name</laber><input type="text " className='border-b-2 px-20 py-2' /></div>
                <div><laber className="px-5 ">Street</laber><input type="text " className='border-b -2 px-20 py-2' /></div>
                <div><laber className="px-5 ">D.No</laber><input type="text " className='border-b -2 px-20 py-2 ' /></div>
                <div><laber className="px-5 ">Dist</laber><input type="text " className='border-b -2 px-20 py-2 ' /></div>
                <div><laber className="px-5 ">State</laber><input type="text " className='border-b -2 px-20 py-2 ' /></div>
                <div><laber className="px-5 ">Country</laber><input type="text " className='border-b -2 px-20 py-2 ' /></div>
            </div>

        </div>

    )
}

export default BuyItems