const TodoData = (props) => {

  const { todoList, deleteTodo } = props;

  const handleClick = (id) => {
    deleteTodo(id)
  }
  //props là 1 object
  //{
  //    name: "Eric",
  //    age: 25,
  //    data: {}
  //}  // eslint-disable-next-line react/prop-types, no-unused-vars
  // const name = props.name;
  // const age = props.age;
  // const data = props.data; 
  // console.log(">>> check props: ", props);
  return (
    <div className='todo-data'>
      {todoList.map((item, index) => {
        return (
          <div className={`todo-item ${index}`} key={index.id}>
            <div>{item.name}</div>
            <button
              onClick={() => handleClick(item.id)}
              style={{ cursor: "pointer" }}>Delete</button>
          </div>)
      })}
    </div>
  )
}

export default TodoData;