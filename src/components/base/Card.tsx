
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Card({ children, className = '', hover = false, padding = 'md', onMouseEnter, onMouseLeave }: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const baseClasses = `bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-200 ${paddingClasses[padding]}`;
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105 cursor-pointer' : '';

  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
