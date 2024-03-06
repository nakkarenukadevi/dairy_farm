import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { QtyIncrese } from "../components/store/productSlice"

const BuyItems = () => {
    let { state } = useLocation()
    let { data, cartItems } = useSelector((state) => state.product);
    console.log(state.item)
    let dispatch = useDispatch();


    const qtyIncrease = () => {
        let x = data.map((Item) => {
            if (Item.id == state.item.id) {
                return { ...state.item, quantity: 2 }
            }
            return Item
        })
        dispatch(QtyIncrese(x))
    }
    return (
        <div className='grid mx-10 justify-center'>
            <div className=' flex py-10  k w-84'>
                <div className='flex  w-20 justify-between font-semibold items-center '><img src={state.item.image} style={{ widht: "100px", height: "100px" }} /></div>
                <div className='flex  w-20 justify-between font-semibold items-center mx-3'>{state.item.name}</div>
                <div className='flex  w-20 justify-between font-semibold items-center '>Price: Rs/-{state.item.price}</div>
                <div className='flex  w-20 justify-between font-semibold items-center '>
                    <div className='text-4xl'>-</div>
                    <div className='text-xl'>{state.item.quantity}</div>
                    <div className='text-3xl' onClick={() => qtyIncrease()}>+</div>
                </div>
            </div>
            <div className='font-bold font-sans  '>
                <h1 className='text-xl text-center'>Adderss</h1>
                <div className='my-3'><laber className="px-5">Name</laber><input type="text " className='border-2 px-20 py-2 rounded-lg' /></div>
                <div><laber className="px-5 ">Street</laber><input type="text " className='border-2 px-20 py-2 rounded-lg' /></div>
                <div><laber className="px-5 ">D.No</laber><input type="text " className='border-2 px-20 py-2 rounded-lg' /></div>
                <div><laber className="px-5 ">Dist</laber><input type="text " className='border-2 px-20 py-2 rounded-lg' /></div>
                <div><laber className="px-5 ">State</laber><input type="text " className='border-2 px-20 py-2 rounded-lg' /></div>
                <div><laber className="px-5 ">Country</laber><input type="text " className='border-2 px-20 py-2 rounded-lg' /></div>
            </div>

        </div>

    )
}

export default BuyItems