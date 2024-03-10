import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    let { cartItems, data } = useSelector((state) => state.product)
    let [productsPop, setProductsPop] = useState(false);

    let instialData = Object.keys(data)

    let navigate = useNavigate();

    let cartLength = 0;

    cartItems.forEach((item) => {
        return cartLength += item.quantity
    })
    const showProduct = () => {
        setProductsPop(!productsPop)

    }
    let gotoProduct = (item) => {
        navigate(`${item}`)
        setProductsPop(false);
    }

    return (
        <div className='bg-green-600 h-20 text-white font-serif fixed top-0 w-full font-bold z-10'>
            <div className='flex justify-between px-20 py-6'>
                <div className='text-2xl' onClick={() => {

                    showProduct()
                }}>  <FontAwesomeIcon icon={faBars} />
                </div>
                {productsPop ? <div className=' absolute top-16 left-5 bg-green-700  w-40 rounded-lg text-center '>{instialData.map((item, index) => {
                    return <div className='m-2 hover:bg-white p-3 rounded-lg hover:text-black active:bg-slate-200  text-white font-serif font-semibold ' key={index} >
                        <div onClick={() => gotoProduct(item)}> {item}</div>
                    </div >
                })}</div> : null}


                <Link to="/countries"><div>countries</div></Link>
                <div className='text-2xl'><Link to="cart">cart({cartLength == "" ? 0 : cartLength})</Link></div>
            </div>

        </div>
    )
}

export default Header