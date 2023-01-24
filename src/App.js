import React, { useState } from "react";
import './App.css'
import Form from "./components/Form";
import List from "./components/List";

export default function App() {

    const [todoData, setTodoData] = useState([]); 
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value !== "") {
            let newTodoData = {
                id: Date.now(),
                title: value,
                completed: false
            }
    
            setTodoData(prev => [...prev, newTodoData]);
            setValue("");
        }
    }

    return (
        <div className="container">
            <div className="todo-group">
                <h1 className="text-3xl font-bold underline">할 일 목록</h1>
                <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
                <List todoData={todoData} setTodoData={setTodoData} />
            </div>
        </div>
    )
}