import React, { useContext } from 'react'
import styled from "styled-components";
import Header from "../Components/Header";
import ProductCard from '../Components/ProductCard';
import CartContext from '../Contexts/CartContext';
import CartProvider from '../Contexts/CartProvider';
import { useGetProductsQuery, useCreateArticleMutation } from '../Services/API';

export default function ProductsScreen() {
    let { data } = useGetProductsQuery();
    const cartContext = useContext(CartContext);

    return (
        <Container>
            <CartProvider>
                <Header />
                <div className="box">
                    <h1 id="titre">Products</h1>
                    <div className="categ">
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
            display: -webkit-box;
            width: 80vw;
            flex-wrap: wrap;
            gap: 15px 10px;
        }
    }
`;