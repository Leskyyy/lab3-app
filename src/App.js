import React from "react"
import foodsJSON from "./foods"
import Food from "./Food"
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItemButton from "./AddItemButton";

export default function App() {
    const [foods, setFoods] = React.useState(foodsJSON)
    
    // function toggle(id) {
    //     setSquares(prevSquares => {
    //         return prevSquares.map((square) => {
    //             return square.id === id ? {...square, on: !square.on} : square
    //         })
    //     })
    // }

    const newItem = {
        id: 0,
        name: "",
        description: "",
        image: '',
        rating: 0,
        editable: true
    }

    function handleClickNewItem () {
        newItem.id = foods.length + 1
        console.log("klikeded")
        setFoods(prevFoods => {
            return [...prevFoods, newItem]
        })
    }
    
    const foodElements = foods.map(food => (
        <Food 
            key={food.id} 
            name={food.name} 
            description={food.description}
            image={food.image}
            rating={food.rating}
            editable={food.editable}
            // toggle={() => toggle(square.id)}
        />
    ))
    
    return (
        <main>
            <AddItemButton onClick={handleClickNewItem}/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {foodElements}
                </tbody>
            </Table>
            
        </main>
    )
}
