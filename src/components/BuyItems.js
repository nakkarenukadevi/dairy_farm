import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { QtyIncrese } from '../components/store/productSlice'

const BuyItems = () => {

    let [adders, setadders] = useState({
        name: "",
        street: "",
        houseNo: "",
        city: "",
        state: "",
        contactNumber: ""

    });

    let { state } = useLocation();
    let { data, buyProduct } = useSelector((state) => state.product);
    let [buyItem, setBuyItem] = useState(state.item);
    let dispatch = useDispatch();


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
    dispatch(QtyIncrese(buyItem));

    const plasedOrder = () => {

        if (adders.name || adders.city || adders.contactNumber || adders.houseNo || adders.state || adders.street !== "") {

            alert(" your order is succesfully plased")
        } else {

            alert("plese fil your adders")
        }


    }
    return (
        <div className='grid mx-10 lg:justify-start  sm:justify-center absolute top-20 ' key={buyItem.id}>
            <div className=' flex py-10   w-full border-b-2  '>
                <div className='flex  w-20 justify-between font-semibold items-center mx-20'>
                    <img src={buyItem.image} style={{ widht: "100px", height: "100px" }} />
                </div>
                <div className='flex  w-52 justify-between font-semibold items-center mx-3'>{buyItem.name}</div>
                <div className='flex  w-20 justify-between font-semibold items-center '>Price: Rs/-{buyItem.price * buyItem.quantity}</div>
                <div className='flex  w-20 justify-between font-semibold items-center '>
                    <div className='text-4xl' onClick={() => dicreseQuantity()}>-</div>
                    <div className='text-xl'>{buyItem.quantity}</div>
                    <div className='text-3xl' onClick={() => qtyIncrease()}>+</div>

                </div>
            </div>
            <div className=' font-bold font-sans '>
                <h1 className='text-xl text-center my-10 boreder-b-2'>Adderss</h1>
                <div className='my-3'>
                    <laber className="px-5">Name</laber>
                    <input type="text " className='border-b-2 px-20 py-2' value={adders.name} onChange={(e) => { setadders({ ...adders, name: e.target.value }) }} />
                </div>
                <div>
                    <laber className="px-5 ">Street/colony</laber>

                    <input type="text " className='border-b -2 px-20 py-2' name="street" value={adders.street} onChange={(e) => { setadders({ ...adders, street: e.target.value }) }} />
                </div>
                <div>
                    <laber className="px-5 ">HouseNo/DoorN0</laber>
                    <input type="text " className='border-b -2 px-20 py-2 ' value={adders.houseNo} onChange={(e) => { setadders({ ...adders, houseNo: e.target.value }) }} />
                </div>
                <div>
                    <laber className="px-5 ">city</laber>
                    <input type="text " className='border-b -2 px-20 py-2 ' value={adders.city} onChange={(e) => { setadders({ ...adders, city: e.target.value }) }} />
                </div>
                <div>
                    <laber className="px-5 ">State</laber>
                    <input type="text " className='border-b -2 px-20 py-2 ' value={adders.state} onChange={(e) => { setadders({ ...adders, state: e.target.value }) }} />
                </div>
                <div>
                    <laber className="px-5 ">Country</laber>
                    <input type="text " className='border-b -2 px-20 py-2 ' value={adders.country} onChange={(e) => { setadders({ ...adders, coountry: e.target.value }) }} />
                </div>
                <div>
                    <laber className="px-5 ">Contact</laber>
                    <input type="text " className='border-b -2 px-20 py-2 ' value={adders.contactNumber} onChange={(e) => { setadders({ ...adders, contactNumber: e.target.value }) }} />
                </div>
                <div className='text-center px-4 py-4 w-72 mx-20 mt-5 bg-green-700 text-white '><button onClick={() =>
                    plasedOrder()
                }>coinfom order</button></div>
            </div>

        </div>

    )
}

export default BuyItems