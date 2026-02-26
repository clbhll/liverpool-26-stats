import { CompetitionBadge, VenueBadge } from '@/components/ui/Badge';
import type { Fixture } from '@/lib/types';

interface FixtureCardProps {
  fixture: Fixture;
}

export default function FixtureCard({ fixture }: FixtureCardProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-surface-800 rounded-lg border border-surface-600 hover:border-surface-200/20 transition-colors">
      <div className="flex items-start sm:items-center gap-3">
        {/* Time */}
        <div className="flex-shrink-0 text-center bg-surface-700 rounded px-3 py-2 min-w-[4rem]">
          <p className="text-xs text-surface-200 font-medium">{fixture.kickoffTime}</p>
        </div>

        <div>
          <p className="font-semibold text-white">
            {fixture.venue === 'home' ? 'Liverpool' : fixture.opponent}{' '}
            <span className="text-surface-200">vs</span>{' '}
            {fixture.venue === 'home' ? fixture.opponent : 'Liverpool'}
          </p>
          <p className="text-sm text-surface-200 mt-0.5">{fixture.venueStadium}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <CompetitionBadge competition={fixture.competition} short />
        <VenueBadge venue={fixture.venue} />
        {fixture.tvBroadcaster && (
          <span className="text-xs text-lfc-gold font-medium">{fixture.tvBroadcaster}</span>
        )}
      </div>
    </div>
  );
}
