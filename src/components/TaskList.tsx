import { useEffect } from 'react';

export default function TaskList() {

	useEffect(() => {
		console.log('TaskList');
		// Despues llamar getTasks()
	}, []);

	return (
		<div>
		<h2>Task List Componente</h2>
		<p>Prueba de TaskList.</p>
		</div>
	);
}
