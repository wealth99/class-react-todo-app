import React from 'react'

export default function Form({handleSubmit, value, setValue}) {
    console.log("Form Component");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="pb-2">
            <fieldset className="flex">
            <legend className="sr-only">할 일 추가</legend>
                <input 
                    type="text"
                    name="value"
                    placeholder="해야 할 일을 입력하세요."
                    value={value}
                    className="w-full mr-4 px-3 py-2 text-gray-500 border rounded shadow"
                    onChange={handleChange}
                />
                <input 
                    type="submit"
                    value="입력"
                    className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
                />
            </fieldset>
        </form>
    )
}
