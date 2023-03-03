import UserClickableMidBox from "../UserClickableMidBox/UserClickableMidBox"
import MiniBox from "../MiniBox/MiniBox"
import boxesArray from "../../data/boxes.js"
import { useState } from "react"
let userBoxes


export default function Main(){
    const [boxes, setBoxes] = useState(boxesArray)

    userBoxes = boxes.map(box => {
        return (
            <UserClickableMidBox 
                key={box.id}
                title={box.title}
                content={box.content}
                date={box.date}
                rate={box.rating.rate}
                count={box.rating.count}
                author={box.author}
            />
        )
    })

    return (
        <div className="main-container">
            <MiniBox 
            

            />
            {userBoxes}
        </div>
    )
}

