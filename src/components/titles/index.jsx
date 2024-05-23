import React from 'react'
import PropTypes from 'prop-types'
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

Title.propTypes = {
  children: PropTypes.node,
};

export default Title
