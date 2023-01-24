import React from 'react';

export default function List({ todoData, setTodoData }) {

    const getStyle = (completed) => {
        return {
            textDecoration: completed ? "line-through" : "none"
        }
    }

    const handleClick = (id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        setTodoData(newTodoData);
    }

    const handleCompleteChange = (id) => {
        let newTodoData = todoData.map(data => {
            if(data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });

        setTodoData(newTodoData);
    }

    return (
        <ul className="todo-item-list">
        {todoData.map(data => (
            <li className="todo-item" key={data.id}>
                <input type="checkbox" name="todo-check" id={'todo-check-' + data.id} defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)} />
                <label htmlFor={'todo-check-' + data.id} style={getStyle(data.completed)}>{data.title}</label>
                <button onClick={() => handleClick(data.id)}>X</button>
            </li>
        ))}
        </ul>
    )
}
