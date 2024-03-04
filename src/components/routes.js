import React from 'react'

import App from '../App'
import { createBrowserRouter, } from 'react-router-dom'
import Home from './Home'
import Milk from './Milk';
import Cart from './Cart';
import BuyItems from './BuyItems';


const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />

            },
            {
                path: "/milk",
                element: <Milk
                />

            },
            ,
            {
                path: "/cart",
                element: <Cart />

            }
            ,
            {
                path: "/buy",
                element: <BuyItems />

            }

        ]

    }
])

export default routes