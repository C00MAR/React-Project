import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductScreen() {
    const {productId} = useParams()
    console.log(productId)
    return (
        <div>ProductScreen</div>
    )
}