import { useEffect } from 'react';
import type { TaskItemProps } from '../types/TaskItemProps';

export default function TaskItem(item: TaskItemProps) {

    useEffect(() => {
        console.log('TaskItem');
    }, []);

    return (
        <div>
        <p>Task Item Componente: {item.task.id}</p>
        </div>
    );
}