import React from "react";
import List from './List';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Lists = React.memo(({ todoData, setTodoData, handleClick }) => {
    console.log("Lists Component");

    const hadledEnd = (result) => {
        console.log(result)

        if(!result.destination) return;

        const newTodoData = todoData;
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);
       
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
        localStorage.setItem("todoData", JSON.stringify(newTodoData));
    }

    return (
        <DragDropContext onDragEnd={hadledEnd}>
            <Droppable droppableId="todo">
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {todoData.map((data, index) => (
                            <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                            {(provided, snapshot) => (
                               <List 
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                completed={data.completed}
                                todoData={todoData}
                                setTodoData={setTodoData}
                                provided={provided}
                                snapshot={snapshot}
                                handleClick={handleClick}
                               />
                            )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
});

export default Lists;