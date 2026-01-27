import { useState } from "react"

export default function LodoBoard(){
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green:0});

    let updateBlue = () => {
        
    }

    return (
        <>
        <p>Game Begin</p>
        <div className="board">
            <p>Blue moves = {moves.blue}</p>
            <button style={{backgroundColor: "blue"}}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button style={{backgroundColor: "red"}}>+1</button>
            <p>Yellow moves = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow"}}>+1</button>
            <p>Green moves = {moves.green}</p>
            <button style={{backgroundColor: "green"}}>+1</button>
        </div>
        </>
    )
}