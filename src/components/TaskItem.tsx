import { useEffect } from 'react';
import type { TaskItemProps } from '../types/TaskItemProps';

export default function TaskItem({ task, onDelete }: TaskItemProps) {

    useEffect(() => {
        //console.log('TaskItem');
    }, []);

    return (
        <li className="list-group-item">
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <small>Creado: {new Date(task.createdAt).toLocaleString()}</small>
            <div className="mt-2">
                <span className={`badge ${task.completed ? 'bg-success' : 'bg-secondary'} me-2`}>
                {task.completed ? 'Hecho' : 'Pendiente'}
                </span>                
                <button onClick={() => onDelete(task.id)} className="btn btn-sm btn-danger">
                Eliminar
                </button>
            </div>
        </li>
    );
}