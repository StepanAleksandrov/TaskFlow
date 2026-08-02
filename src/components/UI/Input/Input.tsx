import type { InputHTMLAttributes } from 'react';
import './Input.css';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
  return <input className={`input ${className ?? ''}`} {...props} />;
};

export default Input;
