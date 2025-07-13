import { useEffect, useState } from 'react';
import { createTask, getTasks, updateTask } from '../services/taskService';
import { useNavigate, useParams } from 'react-router-dom';

export default function TaskForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            loadTask(id);
        }
    }, [id]);

    const loadTask = async (taskId: string) => {
        const tasks = await getTasks();
        const task = tasks.find((t) => t.id === taskId);
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setCompleted(task.completed);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const taskData = { title, description, completed };

        if (id) {
            await updateTask(id, taskData);
        } else {
            await createTask(taskData);
        }

        navigate('/');
    };

    return (
        <div>
            <h2>{id ? 'Editar tarea' : 'Nueva tarea'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nombre de la tarea</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descripcion</label>
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                        id="completedCheck"
                    />
                    <label className="form-check-label" htmlFor="completedCheck">
                        Hecho
                    </label>
                </div>

                <button className="btn btn-success" type="submit">
                    {id ? 'Actualizar tarea' : 'Crear tarea'}
                </button>
                <button type="button" className="btn btn-danger ms-2" onClick={() => navigate('/')}>
                    Cancelar
                </button>
            </form>
        </div>
    );
}
