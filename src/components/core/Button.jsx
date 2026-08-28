import React from 'react';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'danger', 'ghost', 'icon'
  size = 'md', // 'sm', 'md', 'lg'
  isLoading = false,
  isDisabled = false,
  icon: Icon,
  className,
  onClick,
  ariaLabel,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19] disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-2.5 py-1 gap-1.5 min-h-[30px]",
    md: "text-sm px-3.5 py-1.5 gap-2 min-h-[36px]",
    lg: "text-base px-5 py-2.5 gap-2.5 min-h-[44px]"
  };

  const variantStyles = {
    primary: "bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-white shadow-glow-cyan border border-cyan-400/30",
    secondary: "bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-slate-100 border border-slate-700",
    danger: "bg-red-600 hover:bg-red-500 active:bg-red-700 text-white shadow-glow-red border border-red-400/30",
    ghost: "bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white border border-transparent",
    icon: "bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white p-2 rounded-md border border-slate-700/60"
  };

  return (
    <button
      type="button"
      className={twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className))}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : Icon ? (
        <Icon className={clsx(size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4")} />
      ) : null}
      {children}
    </button>
  );
};
