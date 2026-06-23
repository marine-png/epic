import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ className, variant = 'default', size = 'md', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors rounded',
        variant === 'default' && 'bg-white text-black hover:bg-white/90',
        variant === 'outline' && 'border border-white/30 text-white hover:bg-white/10',
        size === 'sm' && 'text-xs px-2 py-1',
        size === 'md' && 'text-sm px-4 py-2',
        size === 'lg' && 'text-base px-6 py-3',
        className
      )}
      {...props}
    />
  );
}
