import { useEffect, useState } from 'react';
import type { Task } from '../types/Task';
import { getTasks } from '../services/taskService';

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
		<h2>Task List Componente</h2>
		<p>Prueba de TaskList.</p>
		{tasks.length === 0 ? (
        <p>No tasks found.</p>
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
