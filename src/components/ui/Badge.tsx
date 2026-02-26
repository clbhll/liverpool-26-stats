import { getCompetitionColor, getCompetitionName, getCompetitionShort } from '@/lib/utils';
import type { Competition } from '@/lib/types';

interface CompetitionBadgeProps {
  competition: Competition;
  short?: boolean;
}

export function CompetitionBadge({ competition, short = false }: CompetitionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold tracking-wide ${getCompetitionColor(competition)}`}
    >
      {short ? getCompetitionShort(competition) : getCompetitionName(competition)}
    </span>
  );
}

interface VenueBadgeProps {
  venue: 'home' | 'away' | 'neutral';
}

export function VenueBadge({ venue }: VenueBadgeProps) {
  const styles = {
    home: 'bg-surface-700 text-surface-200',
    away: 'bg-surface-600 text-surface-200',
    neutral: 'bg-surface-600/60 text-surface-200',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${styles[venue]}`}>
      {venue.charAt(0).toUpperCase() + venue.slice(1)}
    </span>
  );
}
