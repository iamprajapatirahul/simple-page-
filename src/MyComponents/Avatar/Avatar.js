import React from 'react'
import './Avatar.css'
import 'tachyons'

const Avatar = (props) => {
    return (
        <>
            <div className = 'avatarstyle ma4 bg-light-blue grow dib pa2'>
                <img src={props.src} alt="Project Manager" />
                <h1>{props.name}</h1>
                <p>{props.des}</p>
            </div>
        </>
    )
}

export default Avatar
