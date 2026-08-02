import type { HTMLAttributes } from 'react';
import './Container.css';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div className={`container ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
