import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string; // If provided, renders as an anchor tag
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-light',
      secondary: 'bg-accent-pink text-primary-dark hover:bg-opacity-90',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg font-semibold',
    };

    const styles = cn(
      'inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <motion.a
            href={href}
            className={styles}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // @ts-ignore - ref type mismatch for anchor but harmless here
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...(props as any)}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        className={styles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
