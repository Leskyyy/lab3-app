import React from "react"

export default function AddItemButton(props) {
    // const styles = {
    //     backgroundColor: props.on ? "#222222" : "transparent"
    // }
    
    return (
        <div>
            <button onClick={props.onClick}>Add new food item</button>
        </div>
    )
}