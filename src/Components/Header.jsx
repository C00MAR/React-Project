import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../Contexts/CartContext';

export default function Header() {
    const location = useLocation();
    const [itemCount, setItemCount] = useState(0);
    const cartContext = useContext(CartContext);
   
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        setItemCount(storedCartItems ? storedCartItems.length : 0);
    }, [location, cartContext]);

    return (
        <Container>
            <div className='nav'>
                <Link to={"/"} className="logo_link">LA-/-MARQUE</Link>
                <Link to={"/products"} className="product_link">Produits</Link>
                <Link to={"/cart"}>
                    {itemCount > 0 ? (
                        <span>{itemCount}</span>
                    ) : (
                        <span>0</span>
                    )} - 
                    Panier
                </Link>
            </div>
            <div className='color_switcher'>
                <button onClick="changeColorTheme" className='white'></button>
                <button onClick="changeColorTheme" className='red'></button>
                <button onClick="changeColorTheme" className='blue'></button>
                <button onClick="changeColorTheme" className='green'></button>
                <button onClick="changeColorTheme" className='yellow'></button>
            </div>
        </Container>
    )
}


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    top: 0;
    height: 8vh;
    background-color: #fff;

    .nav {
        text-transform: uppercase;
        font-family: "SterlingText";
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        font-size: 20px;
        width: 100%;
        height: 7vh;

        a {
        text-decoration: none;
        color: #000;
        transition: 0.3s ease-in-out;
        border-bottom: 1px solid transparent;

            &:hover {
                border-bottom: 1px solid black;
            }
        }

        .logo_link {
            font-family: 'Marsden Wide';
            font-weight: 900;
            font-style: normal;
        }

        .product_link {
            letter-spacing: -0.05em;

            &:hover {
                letter-spacing: 0.15em;
            }
        }
    }

    .color_switcher {
        width: 100%;
        display: flex;
        padding-left: 10px;
        gap: 5px;
        overflow: hidden;

        button {
            width: 15px;
            height: 15px;
            border: none;
            cursor: pointer;
        }

        .white {
            background-color: #eeeeee;
        }

        .red {
            background-color: #dd3131;
        }

        .blue {
            background-color: #6f9cf9;
        }

        .green {
            background-color: #029c68;
        }

        .yellow {
            background-color: #c6ac59;
        }
    }
`;