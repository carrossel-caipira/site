import React from 'react'
import './styles.jsx'

function Title(props){
    return (
        <>
            <h1>
                {props.children}
            </h1>
        </>

    )
}

export default Title