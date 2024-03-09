import React from 'react'

import App from '../App'
import { createBrowserRouter, } from 'react-router-dom'
import Home from './Home'
import Milk from './Milk';
import Cart from './Cart';
import BuyItems from './BuyItems';
import { Countries } from './countries';


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
                element: <Milk />

            }
            ,
            {
                path: "/cart",
                element: <Cart />

            }
            ,
            {
                path: "/buy",
                element: <BuyItems />

            },
            {
                path: "/countries",
                element: <Countries />
            }

        ]

    }
])

export default routes