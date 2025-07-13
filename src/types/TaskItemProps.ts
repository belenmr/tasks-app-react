import type { Task } from "./Task";

export interface TaskItemProps{
    task: Task;
    onDelete: (id: string) => void
}