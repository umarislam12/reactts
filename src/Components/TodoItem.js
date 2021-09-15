import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleComplete,deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }));
	};
	const todos = useSelector((state) => state.todos);
	const handleDelete=(e)=>{
todos.map(todo=>todo.id)
	}
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						onChange={handleCheckboxClick}
						checked={completed}
					></input>
					{title}
				</span>
				<button className='btn btn-danger' onClick={handleDelete}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;