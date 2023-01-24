import React from 'react'

export default function Form({handleSubmit, value, setValue}) {

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
    <div className="todo-add-area">
        <form onSubmit={handleSubmit}>
            <fieldset>
            <legend>할 일 추가</legend>
                <input type="text" name="value" placeholder="해야 할 일을 입력하세요." value={value} className="todo-input" onChange={handleChange} />
                <input type="submit" value="입력" className="todo-add-btn" />
            </fieldset>
        </form>
    </div>
    )
}
