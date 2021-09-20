import React from "react";
import { useSelector } from "react-redux";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
const Todos = () => {
  const prods=useSelector((state)=>state.prods.inStock)
console.log("state received",prods)
  
  return ( <div >
    <p>failing {`${prods}`}</p>
<AddTodoForm/>
<TodoList/>

  </div> );
}
 
export default Todos;