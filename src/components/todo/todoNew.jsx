const TodoNew = (props) => {
    // eslint-disable-next-line react/prop-types
    const { addNewTodo } = props;
    addNewTodo("Eric");
    return (
         <div className='todo-new'>
          <input type="text"/>
          <button>Add</button>
        </div>
    )
}

export default TodoNew;