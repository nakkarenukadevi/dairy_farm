import React, { useEffect, useState } from 'react';
import mockdata from "../mockdata.json";
import { useDispatch, useSelector } from 'react-redux';
import { productData } from './store/productSlice';



const Home = () => {


    let dispatch = useDispatch();


    dispatch(productData(mockdata))
    console.log(mockdata)

    return (
        <div className='absolute top-20  w-full'><img src="https://images.unsplash.com/photo-1580570598977-4b2412d01bbc?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{ width: "100%" }} /></div>
    )
}

export default Home