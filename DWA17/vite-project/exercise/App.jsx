import React from "react"
import Boxes from "./Boxes"
import Box from "./Box"


export default function App() {
    // eslint-disable-next-line no-unused-vars
    const [squares, setSquares] = React.useState(Boxes)         //a more declarative method
    function toggle(id){
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    /*  setSquares(prevSquares => {                 // c style method
        const newSquares = []               
        for(let i = 0; i < prevSquares.length; i++) {
            const currentSquare = prevSquares[i]
            if(currentSquare.id === id) {
                const updatedSquare = {
                    ...currentSquare,
                    on: !currentSquare.on
                }
                newSquares.push(updatedSquare)
            } else {
                newSquares.push(currentSquare)
            }
        }
        return newSquares
    })
}
*/
    const squareElements = squares.map(square => (
        <Box key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}/>))
        
    return (
        <main>
            {squareElements}
        </main>
    )
}
