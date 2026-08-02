import type { ButtonHTMLAttributes } from 'react';
import './Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`button ${className ?? ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
