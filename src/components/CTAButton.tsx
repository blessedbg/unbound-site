import React from 'react';

interface CTAButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  'aria-label'?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  variant = 'primary',
  className = '',
  'aria-label': ariaLabel
}) => {
  const baseClasses = "btn transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses = variant === 'primary' 
    ? "btn-primary focus:ring-pink-500" 
    : "btn-secondary focus:ring-pink-500";
  
  const classes = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <a 
      href="https://whop.com/checkout/plan_3FvyJwPtB8nvp/"
      className={classes}
      aria-label={ariaLabel || `${text} - Transform your love life with Unbound`}
      role="button"
    >
      {text}
    </a>
  );
};

export default CTAButton;