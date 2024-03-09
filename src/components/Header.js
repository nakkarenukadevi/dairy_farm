import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    let [productsPop, setProductsPop] = useState(false);
    let { cartItems } = useSelector((state) => state.product)

    let Navigate = useNavigate();
    let cartLength = 0;

    cartItems.forEach((item) => {
        return cartLength += item.quantity
    })
    console.log(cartLength)





    return (
        <div className='bg-green-600 h-20 text-white font-serif fixed top-0 w-full font-bold z-10'>
            <div className='flex justify-between px-20 py-6'>
                <div className='text-2xl' onClick={() => {
                    setProductsPop(!productsPop)
                }}>  <FontAwesomeIcon icon={faBars} /></div>
                {productsPop ? <div className='text-black absolute top-16 left-5 bg-green-700  w-40 rounded-lg text-center '>
                    <div className='m-2 hover:bg-white p-3 rounded-lg hover:text-black active:bg-slate-200  text-white font-serif font-semibold ' onClick={() => {
                        Navigate("/milk");
                        setProductsPop(false)
                    }}>Milk</div>
                    <div className='m-2 hover:bg-white p-3 rounded-lg hover:text-black active:bg-slate-200  text-white font-serif font-semibold '>curd</div>
                    <div className='m-2 hover:bg-white p-3 rounded-lg hover:text-black active:bg-slate-200  text-white font-serif font-semibold '>panner</div>
                    <div className='m-2 hover:bg-white p-3 rounded-lg hover:text-black active:bg-slate-200  text-white font-serif font-semibold '>sweets</div>

                </div> : null}
                <div className='text-2xl'><Link to="cart">cart({cartLength == "" ? 0 : cartLength})</Link></div>
            </div>

        </div>
    )
}

export default Header