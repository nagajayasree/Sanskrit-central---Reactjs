import React from 'react';

const useState = React.useState

function TodoApp(){
    const [todos,setTodos] = useState([
        {task:"go to college"},
        {task:"buy veggies"},
        {task:"play tennis"},
    ])
    return(
        <>
        <TodoForm setTodos = {setTodos}/>
        <ul>
            {todos.map(todo=> <Todo task={todo.task}/>)}
        </ul>
        </>
    )
}

function TodoForm(props){
    const [task,setTask] = useState() 

    function submit(e){
        e.preventDefault()
        props.setTodos(prev=>prev.concat({task}))
        setTask('')
    }
    return(
    <form onSubmit={submit}>
        <fieldset>
            <legend>Todo</legend>
            <input value={task} onChange={e=>setTask(e.target.value)} placeholder='Enter the task'/>
            <button>Add Task</button>
        </fieldset>
    </form>
    )
}

function Todo(props){
return <li>{props.task}</li>
}

export default TodoApp;