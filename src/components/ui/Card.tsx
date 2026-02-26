interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-surface-800 rounded-lg border border-surface-600 ${className}`}>
      {children}
    </div>
  );
}
