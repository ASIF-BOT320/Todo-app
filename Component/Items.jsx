import React from 'react'

export default function Items(props) {
    return (

        <div>
             <li>{props.text}</li>
             <button onClick = {() => {
                 props.onSeclat(props.id)
             }} >Click</button>
        </div>
    )
}
