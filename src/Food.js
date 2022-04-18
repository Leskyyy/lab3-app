import React from "react"

export default function Food(props) {
    // const styles = {
    //     backgroundColor: props.on ? "#222222" : "transparent"
    // }

    const [rowContent, setRowContent] = React.useState(props)

    let showRow = !rowContent.editable

    function handleInputChange(event) {
        setRowContent(prevRowData => {
            return {
                ...prevRowData,
                [event.target.name]: event.target.value
            }
        })
        console.log(rowContent)
    }

    function saveContent() {
        setRowContent(prevRowData => {
            return {
                ...prevRowData,
                editable: false
            }
        })
        console.log(rowContent)
    }

    
    return (
        <tr className="foodTable">
            {showRow && <td>{rowContent.name}</td>}
            {!showRow && <td><input name="name" onChange={handleInputChange}/></td>}
            {showRow && <td>{rowContent.description}</td>}
            {!showRow && <td><input name="description" onChange={handleInputChange}/></td> }
            {showRow && 
                <td>
                    <img src={rowContent.image} width="50px" height="50px" />
                </td>
            }
            {!showRow && <td><input name="image" onChange={handleInputChange}/></td> }
            {showRow && <td>{rowContent.rating}</td>}
            {!showRow && <td><input name="rating" onChange={handleInputChange}/></td>}
            <td><button onClick={saveContent}>Save content</button></td>
        </tr>
        
    )
}