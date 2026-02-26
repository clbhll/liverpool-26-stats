import SectionHeader from '@/components/ui/SectionHeader';
import SeasonSummary from '@/components/home/SeasonSummary';
import RecentForm from '@/components/home/RecentForm';
import QuickStats from '@/components/home/QuickStats';
import { getSeasonSummary, getRecentForm, getPlayers, getNextFixtures } from '@/lib/data';
import { formatDate, getCompetitionName } from '@/lib/utils';
import { CompetitionBadge, VenueBadge } from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export default function HomePage() {
  const summary = getSeasonSummary();
  const recentForm = getRecentForm(5);
  const players = getPlayers();
  const nextFixtures = getNextFixtures(3);

  const topScorer = [...players].sort((a, b) => b.goals - a.goals)[0];
  const assistsLeader = [...players].sort((a, b) => b.assists - a.assists)[0];
  const cleanSheetKeeper = [...players]
    .filter((p) => p.position === 'GK')
    .sort((a, b) => (b.cleanSheets ?? 0) - (a.cleanSheets ?? 0))[0];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
          Liverpool FC <span className="text-lfc-red">2025/26</span>
        </h1>
        <p className="text-surface-200">Season statistics &amp; results tracker</p>
      </div>

      {/* Season summary */}
      <section>
        <SectionHeader title="Season Summary" subtitle="All competitions" />
        <SeasonSummary summary={summary} />
      </section>

      {/* Recent form */}
      <section>
        <SectionHeader title="Recent Form" subtitle="Last 5 matches" />
        <Card className="p-5">
          <RecentForm matches={recentForm} />
        </Card>
      </section>

      {/* Quick stats */}
      <section>
        <SectionHeader title="Season Leaders" />
        <QuickStats
          topScorer={topScorer}
          assistsLeader={assistsLeader}
          cleanSheetKeeper={cleanSheetKeeper}
        />
      </section>

      {/* Next fixtures */}
      <section>
        <SectionHeader title="Next Fixtures" subtitle="Upcoming matches" />
        <div className="space-y-3">
          {nextFixtures.map((fixture) => (
            <Card key={fixture.id} className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <CompetitionBadge competition={fixture.competition} short />
                <div>
                  <p className="font-semibold text-white">
                    Liverpool vs {fixture.opponent}
                  </p>
                  <p className="text-sm text-surface-200">
                    {formatDate(fixture.date)} · {fixture.kickoffTime}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <VenueBadge venue={fixture.venue} />
                <span className="text-xs text-surface-200">{fixture.venueStadium}</span>
                {fixture.tvBroadcaster && (
                  <span className="text-xs text-lfc-gold">{fixture.tvBroadcaster}</span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
