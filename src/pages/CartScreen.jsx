import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../Components/Header";

export default function CartScreen() {

    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
        { id: 4, name: 'Product 4', price: 400 },
    ]

    return (
        <div>
            <Header />
        </div>
    )
}