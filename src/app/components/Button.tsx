import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#0B0B0C] text-[#F5F1EA] hover:bg-[#1A1A1C]',
    secondary: 'bg-[#E8E4DC] text-[#0B0B0C] hover:bg-[#D8D4CC]',
    ghost: 'bg-transparent text-[#0B0B0C] hover:bg-[#E8E4DC]',
    gold: 'bg-[#C6A75E] text-[#0B0B0C] hover:bg-[#A88B4A]',
  };

  const sizes = {
    sm: 'px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm',
    md: 'px-4 py-2 md:px-6 md:py-3 text-sm md:text-base',
    lg: 'px-6 py-3 md:px-8 md:py-4 text-base md:text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};