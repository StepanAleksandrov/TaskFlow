import type { Task } from "../types/task";

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Learn React Router',
    description: 'Practice nested routes and layouts.',
    priority: 'high',
    completed: false,
  },
  {
    id: '2',
    title: 'Build UI Components',
    description: 'Create reusable Button, Input and Card.',
    priority: 'medium',
    completed: true,
  },
];
