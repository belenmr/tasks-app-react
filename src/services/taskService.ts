import type { Task } from '../types/Task';

const API_URL = import.meta.env.VITE_API_URL;
const headers = { 'Content-Type': 'application/json' };

export async function getTasks(): Promise<Task[]> {
	//console.log(API_URL)
    const res = await fetch(API_URL);
    return res.json();
}

export async function createTask(task: Partial<Task>): Promise<Task> {
	const res = await fetch(API_URL, {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(task),
	});
	return res.json();
}

export async function updateTask(id: string, task: Partial<Task>): Promise<Task> {
	const res = await fetch(`${API_URL}/${id}`, {
		method: 'PUT',
		headers: headers,
		body: JSON.stringify(task),
	});
	return res.json();
}

export async function deleteTask(id: string): Promise<void> {
	await fetch(`${API_URL}/${id}`, {
		method: 'DELETE',
	});
}