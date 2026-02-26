interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="accent-border-left mb-6">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-0.5 text-sm text-surface-200">{subtitle}</p>}
    </div>
  );
}
