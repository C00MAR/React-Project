import React, { useContext } from 'react'
import styled from "styled-components";
import CartContext from '../Contexts/CartContext';
import { Link } from 'react-router-dom'
import MyButton from "../Components/MyButton";

export default function ProductCard({ product }) {
    const { addToCart } = useContext(CartContext);

    const handleAddToCartBtn = () => {
        addToCart(product);
        };

    return (
        <Container>
            <img src={product.image} alt="product_image" />
            <div class='info'>
                <Link to={`/products/${product.id}`}>{product.title} = {product.price}€</Link>
                <div>
                    <p>{(product.quantity * product.price).toFixed(2)} €</p>
                    <p>x {product.quantity}</p>
                </div>
                <MyButton labelBtn="Ajouter au Panier" variant="primary" onClickEvent={handleAddToCartBtn}/>
            </div>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 35vh;
    width: 48%;
    margin: auto;
    border: 2px solid #000000;
    border-radius: 15px;

    img {
        width: 50%;
        height: 100%;
        object-fit: contain;
        mix-blend-mode: multiply;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 50%;
        height: 100%;
        padding: 15px 0;

        a {
            text-decoration: none;
            color: #000;
            transition: 0.3s ease-in-out;
            border-bottom: 1px solid transparent;
            font-size: 1.4em;
            font-weight: 700;

            &:hover {
                border-bottom: 1px solid black;
            }
        }

        div {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            gap: 10px;
            width: 50%;

            p {
                font-size: 1.1em;
                font-weight: 400;
            }
        }
    }
`;