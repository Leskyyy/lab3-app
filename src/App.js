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
    const [filterProperty, setFilterProperty] = React.useState({
        filterName: "",
        filterDescription: "",
        filterRating: ""
    })
    
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

    let foodElements = foods

    if(filterProperty.filterName !== ""){
        foodElements = foodElements.filter(food => food.name.startsWith([filterProperty.filterName]))
    }

    if(filterProperty.filterDescription !== ""){
        foodElements = foodElements.filter(food => food.description.startsWith([filterProperty.filterDescription]))
    }

    if(filterProperty.filterRating !== ""){
        foodElements = foodElements.filter(food => food.rating.startsWith([filterProperty.filterRating]))
    }

    foodElements = foodElements.sort((a, b) => a[sortProperty] > b[sortProperty] ? sortNormal : (-1 * sortNormal))
                            .map(food => (
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

    function sortBy(event) {
        if(sortProperty === event.target.name){
            setSortProperty(event.target.name)
            setSortNormal(sortNormal * -1)
        }else{
            setSortProperty(event.target.name)
            setSortNormal(1)
        }
    }

    function filterBy(event){
        setFilterProperty(prevFilter => {
            return{
                ...prevFilter,
                [event.target.name]: event.target.value
            }
        })
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
                            <button name='name' onClick={sortBy}>Sort by name</button>
                        </th>
                        <th>
                            <button name='description' onClick={sortBy}>Sort by description</button>
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            <button name='rating' onClick={sortBy}>Sort by rating</button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <input name='filterName' onChange={filterBy} />
                        </th>
                        <th>
                            <input name='filterDescription' onChange={filterBy} />
                        </th>
                        <th>
                            
                        </th>
                        <th>
                            <input name='filterRating' onChange={filterBy} />
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
