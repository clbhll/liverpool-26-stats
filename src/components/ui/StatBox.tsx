interface StatBoxProps {
  value: string | number;
  label: string;
  accent?: boolean;
  className?: string;
}

export default function StatBox({ value, label, accent = false, className = '' }: StatBoxProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-4 bg-surface-800 rounded-lg border border-surface-600 ${className}`}>
      <span className={`text-3xl font-bold tabular-nums ${accent ? 'text-lfc-gold' : 'text-white'}`}>
        {value}
      </span>
      <span className="mt-1 text-xs font-medium uppercase tracking-wider text-surface-200">
        {label}
      </span>
    </div>
  );
}
