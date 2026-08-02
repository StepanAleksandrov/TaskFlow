import { useState } from 'react';
import TaskCard from '../../components/TaskCard';
import type { Task } from '../../types/task';
import { tasks as mockData } from '../../data/tasks';

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>(mockData);

  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }

        return task;
      }),
    );
  };

  return (
    <>
      <h1>Dashboard Page</h1>
      <section>
        <h2>Your Tasks</h2>

        {tasks.length > 0 ? (
          tasks.map((task) => <TaskCard key={task.id} onToggle={handleToggleTask} {...task} />)
        ) : (
          <p>No tasks yet. Create your first task!</p>
        )}
      </section>
    </>
  );
};

export default Dashboard;
