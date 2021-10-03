import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
	const todos = useSelector((state) => state.todos);
	//console.log(todos);
	return (

		<ul className='list-group'>
			<li style={{"listStyleType": "none"}}>Number of tasks:{todos.length}</li>
			{todos.map((todo,i) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed}  key={i}/>
				
			))}
			
			
		</ul>
	);
};

export default TodoList;