import React from "react"
import foodsJSON from "./foods"
import Food from "./Food"
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItemButton from "./AddItemButton";

export default function App() {
    const [foods, setFoods] = React.useState(foodsJSON)
    const [sortProperty, setSortProperty] = React.useState('name')
    const [sortNormal, setSortNormal] = React.useState(1)
    
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
        setFoods(prevFoods => {
            return [...prevFoods, newItem]
        })
    }
    
    let foodElements = foods.sort((a, b) => a[sortProperty] > b[sortProperty] ? sortNormal : (-1 * sortNormal)).map(food => (
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

    function sortByRating(event) {
        if(sortProperty == event.target.name){
            setSortProperty(event.target.name)
            setSortNormal(sortNormal * -1)
        }else{
            setSortProperty(event.target.name)
            setSortNormal(1)
        }
    }
    
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
                    <tr>
                        <th>
                            <button name='name' onClick={sortByRating}>Sort by name</button>
                        </th>
                        <th>
                            <button name='description' onClick={sortByRating}>Sort by description</button>
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            <button name='rating' onClick={sortByRating}>Sort by rating</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {foodElements}
                </tbody>
            </Table>
            
        </main>
    )
}
