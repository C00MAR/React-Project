import React from 'react'

export default function MyInput({ typeOfInput, placeholder, onChangeEvent, value, id}) {
    return (
        <>
            <label>{placeholder}</label>
            <input id={id} type={typeOfInput} placeholder={placeholder} value={value} onChange={onChangeEvent} />
        </>
    )
}