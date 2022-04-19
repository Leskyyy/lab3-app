import React from "react"

export default function Food(props) {
    // const styles = {
    //     backgroundColor: props.on ? "#222222" : "transparent"
    // }

    const [rowContent, setRowContent] = React.useState(props)
    const [rowDeleted, setRowDeleted] = React.useState(false)
    const [disableSaveButton, setDisableSaveButton] = React.useState(!props.editable)


    let showRow = !rowContent.editable

    function handleInputChange(event) {
        setRowContent(prevRowData => {
            return {
                ...prevRowData,
                [event.target.name]: event.target.value
            }
        })
    }

    function saveContent() {
        setRowContent(prevRowData => {
            return {
                ...prevRowData,
                editable: false
            }
        })
        setDisableSaveButton(!disableSaveButton)
    }

    function deleteContent() {
        setRowDeleted(true)
    }

    function editContent() {
        setRowContent(prevRowData => {
            return {
                ...prevRowData,
                editable: true
            }
        })
        setDisableSaveButton(!disableSaveButton)
    }

    
    return (
        !rowDeleted &&
        <tr className="foodTable">
            {showRow && <td>{rowContent.name}</td>}
            {!showRow && <td><input name="name" value={rowContent.name} onChange={handleInputChange}/></td>}
            {showRow && <td>{rowContent.description}</td>}
            {!showRow && <td><input name="description" value={rowContent.description} onChange={handleInputChange}/></td> }
            {showRow && 
                <td>
                    <img src={rowContent.image} width="50px" height="50px" />
                </td>
            }
            {!showRow && <td><input name="image" value={rowContent.image} onChange={handleInputChange}/></td> }
            {showRow && <td>{rowContent.rating}</td>}
            {!showRow && <td><input name="rating" value={rowContent.rating} onChange={handleInputChange}/></td>}
            <td><button disabled={disableSaveButton} onClick={saveContent}>Save content</button></td>
            <td><button onClick={deleteContent}>Delete content</button></td>
            <td><button onClick={editContent}>Edit content</button></td>
        </tr>
        
    )
}