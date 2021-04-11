import "./Card.css"

import React from 'react'

export default props =>
    <div className="Card">
        <div className="Content"
            style={{
                borderColor: props.color || '#000'
            }}>
            {props.children}
        </div>
        <div className="Footer"
            style={{
                backgroundColor: props.color || '#000'
            }}>
            {props.titulo}
        </div>
    </div>