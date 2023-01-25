import React, { useState } from "react";

const List = React.memo(({id, title, completed, todoData, setTodoData, provided, snapshot, handleClick}) => {
    console.log("List Component");

    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map(data => {
            if(data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });

        setTodoData(newTodoData);
        localStorage.setItem("todoData", JSON.stringify(newTodoData));
    }

    const handleEditChange = (e) => {
        setEditTitle(e.target.value);
    }

    const handleEditSubmit = (e) => {
        let newTodoData = todoData.map(data => {
            if(data.id === id) {
                data.title = editTitle;
            }
            return data;
        });

        setTodoData(newTodoData);
        localStorage.setItem("todoData", JSON.stringify(newTodoData));
        setIsEditing(false);
    }

    if(isEditing) {
        return (
            <li className="flex items-center w-full my-2 px-4 py-1 border rounded text-gray-600 bg-gray-100">
                <input 
                    value={editTitle}
                    onChange={handleEditChange}
                    className="w-full mr-4 px-3 py-2 rounded text-gray-500"
                />
                <button className="pr-4" onClick={handleEditSubmit}>save</button>
                {/* <button onClick={() => handleClick(id)}>X</button> */}
            </li>
        )
    } else {
        return (
            <li 
                key={id}
                {...provided.draggableProps}
                ref={provided.innerRef}
                {...provided.dragHandleProps} 
                className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center w-full my-2 px-4 py-1 border rounded text-gray-600`}
            >
                <input 
                    type="checkbox"
                    name="todo-check"
                    id={'todo-check-' + id}
                    defaultChecked={completed}
                    onChange={() => handleCompleteChange(id)}
                />
                <label htmlFor={'todo-check-' + id} className={`${completed ? "line-through" : ""} mr-auto pl-2.5`}>
                    {title}
                </label>
                <button className="pr-4" onClick={() => setIsEditing(true)}>edit</button>
                <button onClick={() => handleClick(id)}>X</button>
            </li>
        )
    }
});

export default List;