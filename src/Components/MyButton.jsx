import React from 'react'
import styled from "styled-components";

export default function MyButton({ labelBtn, onClickEvent, variant }) {
    return (
        <Button onClick={onClickEvent} $variant={variant}>
            {labelBtn}
        </Button>
    )
}


const Button = styled.button`
    background-color: ${(props) => {
    switch (props.$variant) {
        case "primary":
            return "#000000";
        case "secondary":
            return "transparent";
        default:
            return "#363636";
        }
    }};
        &:hover {
            background-color: ${(props) => {
            switch (props.$variant) {
                case "secondary":
                    return "#6f9cf9";
                default:
                    return "";
                }
            }};
            letter-spacing: ${(props) => {
            switch (props.$variant) {
                case "primary":
                    return "1px";
                default:
                    return "";
                }
            }};
        }
    border: ${(props) => {
    switch (props.$variant) {
        case "primary":
            return "0.15em solid transparent";
        case "secondary":
            return "0.15em solid #fff";
        default:
            return "none";
        }
    }};
    transition: 0.2s ease-in-out;
    width: 80%;
    letter-spacing: 0;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    text-transform: uppercase;
    font-family: "SterlingText";
    font-weight: 500;
    border-radius: 12px;
`;