import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cartData } from './store/productSlice';
import { useNavigate, Link } from 'react-router-dom';

const Milk = () => {
    let { data, cartItems } = useSelector((state) => state.product);

    let dispatch = useDispatch();

    let navigate = useNavigate();

    let cart = (product) => {
        let filterCartData = data.find((cartItem) => {
            if (cartItem.id == product.id) {
                return cartItem;
            }

        });


        dispatch(cartData(filterCartData));
    };



    return (
        <div className='grid grid-cols-3 gap-4 justify-items-center  items-center py-20 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                data.map((product) => {
                    return <div className='grid justify-items-center items-center py-4' key={product}>
                        <div className='py-3'><img src={product.image} style={{ width: "300px", height: "300px" }} /></div>
                        <div className='py-3 text-2xl font-sans font-bold md:text-xl sm:text-base'>{product.name}</div>
                        <div className='py-3 text-2xl font-sans font-bold md:text-xl sm:text-base'>Rs/- {product.price}</div>
                        <div className='py-3 text-2xl font-sans font-bold md:text-xl sm:text-base'>Quantity- {product.quantity}</div>
                        <div className='flex'>
                            <div className='px-5'>
                                <button className='px-5 py-3 bg-blue-700 text-white font-serif font-bold rounded-lg hover:bg-sky-600 active:bg-sky-700' onClick={() => {
                                    cart(product)
                                }}>Add cart</button>
                            </div>
                            <div>
                                <button className='px-5 py-3 bg-blue-700 text-white font-serif font-bold rounded-lg hover:bg-sky-600 active:bg-sky-700'  ><Link to="/buy" state={{ item: product }}>Buy Now</Link></button>
                            </div>
                        </div>

                    </div>
                })
            }

        </div >
    )
}

export default Milk