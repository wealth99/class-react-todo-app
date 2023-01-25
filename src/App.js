import React, { useState, useCallback } from "react";
import './App.css'
import Form from "./components/Form";
import Lists from "./components/Lists";

const initialTodoData = localStorage.getItem("todoData")? JSON.parse(localStorage.getItem("todoData")) : [];

export default function App() {
    console.log("App Component");

    const [todoData, setTodoData] = useState(initialTodoData); 
    const [value, setValue] = useState("");

    const handleClick = useCallback((id) => {
        let newTodoData = todoData.filter(data => data.id !== id);
        setTodoData(newTodoData);
        localStorage.setItem("todoData", JSON.stringify(newTodoData));
    }, [todoData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(value !== "") {
            let newTodoData = {
                id: Date.now(),
                title: value,
                completed: false
            }
    
            setTodoData(prev => [...prev, newTodoData]);
            localStorage.setItem("todoData", JSON.stringify([...todoData, newTodoData]));
            setValue("");
        }
    }

    const handleRemoveClick = () => {
        setTodoData([]);
        localStorage.setItem(JSON.stringify([]));
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full lg:w-2/4 lg:max-w-lg m-4 p-6 rounded shadow bg-white">
                <div className="flex justify-between mb-5">
                    <h1 className="text-3xl font-bold">할 일 목록</h1>
                    <button type="button" onClick={handleRemoveClick}>Delete All</button>
                </div>
                <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
                <Lists todoData={todoData} setTodoData={setTodoData} handleClick={handleClick} />
            </div>
        </div>
    )
}