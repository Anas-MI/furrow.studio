import React, {useState, useEffect} from 'react'

import {Cursor} from "../styles/globalStyles"

const CustomCursor = () => {

    const [mousePosition, setMousePosition] = useState({
        x: 400, 
        y: 400
    }) 

const onMouseMove = event => {
    //capture pages x and y
    const {pageX: x, pageY: y} = event 
    setMousePosition({x, y})
    console.log({x, y})

}

useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    return () => {
    document.removeEventListener('mousemove', onMouseMove)

    }
}, [])

    return (
        <>
         <Cursor style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}></Cursor>   
        </>
    )
}

export default CustomCursor
