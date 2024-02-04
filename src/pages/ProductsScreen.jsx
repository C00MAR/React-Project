import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../Components/Header";
import MyButton from "../Components/MyButton";
import { useGetProductsQuery, useCreateArticleMutation } from '../Services/API';

export default function ProductsScreen() {
    let { data, isLoading } = useGetProductsQuery();

    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
        { id: 4, name: 'Product 4', price: 400 },
    ];

    const onClickEvent = () => {
        console.log("good")
    };

    return (
        <>
            <Header />
            ProductsScreen
            {products.map((product) => {
            return (
                <div key={product.id}>
                    <Link to={`/products/${product.id}`}><h3>{product.name}</h3></Link>
                    <p>${product.price}</p>
                </div>
            )
            })}
            <div class="">
                {
                !isLoading ?
                    data.slice().reverse().map((product) => {
                    return <div>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                        <img src={product.image} alt="product_image" />
                        <MyButton labelBtn="Ajouter au Panier" variant="primary" onClickEvent={onClickEvent}/>
                    </div>
                    }) :
                    <span>Loading...</span>
                }
            </div>
        </>
    )
}


// For IMG : mix-blend-mode: multiply;