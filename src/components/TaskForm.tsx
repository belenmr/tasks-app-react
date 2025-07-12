import { useEffect } from 'react';

export default function TaskForm() {

    useEffect(() => {
        console.log('TaskForm');
    }, []);

    return (
        <div>
        <h2>Task Form Componente</h2>
        <p>Prueba de TaskForm.</p>
        </div>
    );
}
