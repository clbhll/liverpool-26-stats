import FixtureCard from '@/components/fixtures/FixtureCard';
import { formatMonth, getMonthKey } from '@/lib/utils';
import type { Fixture } from '@/lib/types';

interface FixtureListProps {
  fixtures: Fixture[];
}

export default function FixtureList({ fixtures }: FixtureListProps) {
  // Group by YYYY-MM
  const grouped = fixtures.reduce<Record<string, Fixture[]>>((acc, fixture) => {
    const key = getMonthKey(fixture.date);
    if (!acc[key]) acc[key] = [];
    acc[key].push(fixture);
    return acc;
  }, {});

  const monthKeys = Object.keys(grouped).sort();

  if (monthKeys.length === 0) {
    return (
      <p className="text-surface-200 text-center py-8">No upcoming fixtures.</p>
    );
  }

  return (
    <div className="space-y-8">
      {monthKeys.map((key) => (
        <section key={key}>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-surface-200 mb-3 accent-border-left">
            {formatMonth(key + '-01')}
          </h3>
          <div className="space-y-2">
            {grouped[key].map((fixture) => (
              <FixtureCard key={fixture.id} fixture={fixture} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
