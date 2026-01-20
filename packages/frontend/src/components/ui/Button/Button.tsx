import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

type Props = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

export const Button = ({ variant = 'primary', children, className = '' }: Props) => {
  const baseClasses = 'cursor-pointer font-medium rounded-lg transition-all px-6 py-2';

  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-700 text-gray-200 hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    ghost: 'border border-gray-700 text-gray-300 hover:bg-gray-700',
  };

  return <button className={`${baseClasses} ${variants[variant]} ${className}`}>{children}</button>;
};
