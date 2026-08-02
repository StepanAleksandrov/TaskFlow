import type { HTMLAttributes } from 'react';
import './Card.css';

type CardProps = HTMLAttributes<HTMLElement>;

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={`card ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
