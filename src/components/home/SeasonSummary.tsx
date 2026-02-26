import StatBox from '@/components/ui/StatBox';
import type { SeasonSummary as SeasonSummaryType } from '@/lib/types';

interface SeasonSummaryProps {
  summary: SeasonSummaryType;
}

export default function SeasonSummary({ summary }: SeasonSummaryProps) {
  const stats = [
    { value: summary.played, label: 'Played' },
    { value: summary.won, label: 'Won', accent: true },
    { value: summary.drawn, label: 'Drawn' },
    { value: summary.lost, label: 'Lost' },
    { value: summary.goalsFor, label: 'Goals For', accent: true },
    { value: summary.goalsAgainst, label: 'Goals Against' },
    { value: summary.points, label: 'Points', accent: true },
    { value: summary.position ?? '—', label: 'Position', accent: true },
  ];

  return (
    <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
      {stats.map(({ value, label, accent }) => (
        <StatBox key={label} value={value} label={label} accent={accent} />
      ))}
    </div>
  );
}
