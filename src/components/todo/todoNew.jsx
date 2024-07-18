import { useState } from "react";

const TodoNew = (props) => {

    //useState hook
    // const valueInput = "eric"
    const [valueInput, setValueInput] = useState("eric");

                const { addNewTodo } = props;

    // addNewTodo("Eric");

    const handleClick = () => {
        console.log(">>> check valueInput: ", valueInput)
    }
    const handleOnChange = (name) => {
        setValueInput(name)

    }
    return (
         <div className='todo-new'>
          <input type="text"
            onChange={handleOnChange}
            />
          <button 
            style={{ cursor: "pointer"}}
            onClick={handleClick}>Add
            </button>
            <div>
                my text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;