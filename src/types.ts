export interface Task {
  id: number;
  description: string;
  isCompleted: boolean;
}

export type updateTask = (updatedTask: Task) => void;
export type deleteTask = (taskId: number) => void;
