import React, { useContext, useState } from 'react';
import { useGetProductsQuery, useGetProductCommentsQuery, usePostProductCommentMutation } from '../Services/API';
import CartProvider from '../Contexts/CartProvider';
import CartContext from '../Contexts/CartContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Components/Header';
import MyButton from "../Components/MyButton";

export default function ProductScreen() {
    const { data, isLoading } = useGetProductsQuery();
    const { productId } = useParams();
    const { data: commentsData, isLoading: commentsLoading } = useGetProductCommentsQuery(productId);
    const { addToCart } = useContext(CartContext);
    const [postComment] = usePostProductCommentMutation();
    const [newComment, setNewComment] = useState('');
    const [username, setUsername] = useState('');

    const product = data?.find((product) => product.id === productId);

    if (isLoading || commentsLoading) {
        return <div>Loading...</div>;
    }

    const otherComments = commentsData ? commentsData.slice(0, -4) : [];

    const handleAddToCartBtn = () => {
        addToCart(product);
    };

    const handleSubmitComment = async (e) => {
        e.preventDefault();
        await postComment({ productId: product.id, username, comment: newComment });
        setNewComment('');
        setUsername('');
    };

    return (
        <Container>
            <CartProvider>
                <Header />
                <div class="productPage">
                    <div class="productImage">
                        <img src={product.image} alt="product_image" />
                    </div>
                    <div class="Product-Comment">
                        <div class="ProductInfo">
                            <h1>{product.title}</h1>
                            <p>{product.price} €</p>
                            <MyButton labelBtn="Ajouter au Panier" variant="primary" onClickEvent={handleAddToCartBtn} class="btnATC"/>
                        </div>
                        <div class="Comments">
                            <div class="CreateCommentForm">
                                <h2>Create Comment</h2>
                                <form onSubmit={handleSubmitComment}>
                                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                                    <input type="text" placeholder="Comment" onChange={(e) => setNewComment(e.target.value)}/>
                                    <MyButton labelBtn="Submit" variant="primary" type="submit"/>
                                </form>
                            </div>
                            <div class="OtherComment">
                                <h2>Comments :</h2>
                                {otherComments.map((comment) => (
                                    <div class="comment">
                                        <div class="commentInfo">
                                            <h3>{comment.username}</h3>
                                            <p>{comment.comment}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
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

    .productPage {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        width: 80%;
        height: 100%;

        img {
            height: 90%;
            margin-left: -100px;
            position: fixed;
            object-fit: contain;
            mix-blend-mode: multiply;
        }

        .Product-Comment {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 50%;
            height: 100%;
            border-left: 1px solid #000000;
            

            .ProductInfo {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                width: 100%;
                height: 100%;
                padding: 0 20%;
                gap: 3vh;
                border-bottom: 1px solid #000000;
                padding-bottom: 5vh;

                h1 {
                    font-size: 2.5em;
                }

                p {
                    font-size: 2em;
                }
            }

            .Comments {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 100%;
                padding-top: 5vh;
                gap: 5vh;

                .CreateCommentForm {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    padding: 0 20%;
                    gap: 2vh;

                    form {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        gap: 2vh;
                    }

                    h2 {
                        font-size: 1%.5em;
                    }

                    input {
                        width: 85%;
                        height: 5vh;
                        font-size: 0.8em;
                        background-color: transparent;
                        border: 1px solid #000000;
                        padding: 15px 10px;
                        border-radius: 5px;
                    }
                }

                .OtherComment {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    width: 100%;
                    height: 100%;

                    h2 {
                        font-size: 1.5em;
                    }

                    .comment {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        padding: 2vh 0;
                        border-bottom: 1px solid #000000;

                        .commentInfo {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
                            align-items: center;
                            width: 100%;
                            height: 100%;

                            h3 {
                                font-size: 2em;
                            }

                            p {
                                font-size: 1.5em;
                            }
                        }
                    }
                }
            }
        }
    }
`;