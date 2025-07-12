import { useEffect, useState } from 'react';
import type { Task } from '../types/Task';
import { getTasks } from '../services/taskService';
import { Link } from 'react-router-dom';

export default function TaskList() {
	const [tasks, setTasks] = useState<Task[]>([]);

	const loadTasks = async () => {
    	try {
			const data = await getTasks();
			setTasks(data);
			console.log(data);
		} catch (error) {
			console.error(`Error loading tasks: ${error}`);
		}
	};

	useEffect(() => {
		//console.log('TaskList');
		loadTasks();
	}, []);

	return (
		<div>
		<Link to="/tasks/new" className="btn btn-primary mb-3">Agregar nueva tarea</Link>

		{tasks.length === 0 ? (
        <p>No hay tareas.</p>
      	) : (
			<ul className="list-group">
			{tasks.map((task) => (
				<li key={task.id}>{task.id}</li>
			))}
			</ul>
      	)}
		</div>
	);
}
