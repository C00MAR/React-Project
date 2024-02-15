import React, { useContext } from 'react'
import Header from "../Components/Header";
import CartContext from '../Contexts/CartContext';
import CartProvider from '../Contexts/CartProvider';
import styled from "styled-components";
import MyButton from "../Components/MyButton";
import ProductCard from '../Components/ProductCard';

export default function CartScreen() {
    const rawCartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
    const { removeFromCart, emptyCart } = useContext(CartContext);
    const cartContext = useContext(CartContext);

    const groupedCartItems = rawCartItems.reduce((acc, item) => {
        acc[item.id] = acc[item.id] || { ...item, quantity: 0 };
        acc[item.id].quantity += 1;
        return acc;
    }, {});

    const cartItems = Object.values(groupedCartItems);

    return (
        <Container>
            <CartProvider>
                <Header />
                <div class="box">
                    <h1 id="titre">Cart</h1>
                    {cartItems.length > 0 && (
                        <MyButton labelBtn="Vider le Panier" variant="primary" onClickEvent={emptyCart}/>
                    )}
                    <div class="categ">
                    {cartItems.length === 0 ? (
                        <p>Panier Vide !</p>
                    ) : (
                    cartItems.map((item) => (
                        <ProductCard product={item} cartContext={cartContext} />
                    ))
                    )}
                    </div>
                </div>
            </CartProvider>
        </Container>
    )
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