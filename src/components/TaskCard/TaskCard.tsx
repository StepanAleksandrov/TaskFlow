import Card from '../UI/Card';
import type { Task } from '../../types/task';
import Button from '../UI/Button';
import './TaskCard.css';

type TaskCardProps = Task & {
  onToggle: (id: string) => void;
};

const TaskCard = ({ id, title, description, priority, completed, onToggle }: TaskCardProps) => {
  return (
    <Card>
      <div className="task-card">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="task-footer">
          <span className={`priority ${priority}`}>{priority}</span>
          <Button onClick={() => onToggle(id)}>{completed ? 'Completed' : 'Complete'}</Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
