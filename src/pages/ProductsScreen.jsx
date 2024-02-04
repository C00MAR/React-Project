import React, { useContext } from 'react'
import styled from "styled-components";
import Header from "../Components/Header";
import ProductCard from '../Components/ProductCard';
import CartContext from '../Contexts/CartContext';
import CartProvider from '../Contexts/CartProvider';
import { useGetProductsQuery, useCreateArticleMutation } from '../Services/API';

export default function ProductsScreen() {
    let { data, isLoading } = useGetProductsQuery();
    const cartContext = useContext(CartContext);

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
        <Container>
            <CartProvider>
                <Header />
                <div class="box">
                    <h1 id="titre">Products</h1>
                    <div class="categ">
                        {data?.map((product) => (
                            <ProductCard product={product} cartContext={cartContext} />
                        ))}
                    </div>
                </div>
            </CartProvider>
        </Container>
    );
}



const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .box {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: flex-start;
        gap: 10vh;
        margin: 5vh 0;

        h1 {
            font-family: 'Marsden Wide';
            font-weight: 900;
            font-style: normal;
            font-size: 4.5em;
            text-transform: uppercase;
            white-space: nowrap;
            overflow: hidden;
        }

        .categ {
            background-color: #eeeeee;
            display: -webkit-box;
            width: 80vw;
            flex-wrap: wrap;
            gap: 15px 10px;
        }
    }
`;