import React from "react";
import styled from "styled-components";
import MyButton from "../Components/MyButton";
import Header from "../Components/Header";
import { useGetProductsQuery, useCreateArticleMutation } from '../Services/API';

export default function HomeScreen() {
    let { data, isLoading } = useGetProductsQuery()
    
    function ajusterTailleDePolice() {
        const titre = document.getElementById('titre');
        let tailleDePolice = 100;
        titre.style.fontSize = `${tailleDePolice}px`;

        while (titre.scrollWidth > titre.offsetWidth) {
            tailleDePolice--;
            titre.style.fontSize = `${tailleDePolice}px`;
            if (tailleDePolice <= 0) break;
        }
    }

    window.onload = ajusterTailleDePolice;
    window.onresize = ajusterTailleDePolice;

    return (
        <Container>
            <Header />
            <div className="categ">
                <h1 id="titre">New-/-Collection</h1>
                <div className="">
                    {
                    !isLoading ?
                        data.slice().reverse().map((product) => {
                        return <div>
                            <h3>{product.title}</h3>
                            <p>{product.content}</p>
                        </div>
                        }) :
                        <span>Loading...</span>
                    }
                </div>
            </div>
            {/* <MyButton labelBtn="GETTT" variant="primary"/> */}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    
    .categ {
        background-color: #eeeeee;
        flex-direction: column;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 92vh;

        h1 {
            font-family: 'Marsden Wide';
            font-weight: 900;
            font-style: normal;
            font-size: 4.5em;
            text-transform: lowercase;
            white-space: nowrap;
            overflow: hidden;
        }
    }
`;