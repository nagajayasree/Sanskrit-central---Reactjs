import React from 'react';

const useState = React.useState
const useEffect = React.useEffect


function TodoApp(){
    const [todos,setTodos] = useState([
        {task:"go to college"},
        {task:"buy veggies"},
        {task:"play tennis"},
    ])
    
    useEffect(()=>{
        if(localStorage.getItem('TodoData')){
            setTodos(JSON.parse(localStorage.getItem('TodoData')))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('TodoData',JSON.stringify(todos))
    },[todos])
    
    return(
        <>
        <TodoForm setTodos = {setTodos}/>
        <ul>
            {todos.map(todo=> <Todo setTodos = {setTodos} key={todo.task} task={todo.task}/>)}
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
    function DeleteTask(){
        props.setTodos(prev=>prev.filter(todo=>props.task != todo.task))
    }
return <li>{props.task}
<button onClick={DeleteTask}>Delete</button>
</li>
}

export default TodoApp;
