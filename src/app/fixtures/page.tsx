import FixtureList from '@/components/fixtures/FixtureList';
import { getFixtures } from '@/lib/data';

export const metadata = {
  title: 'Fixtures | LFC Stats 2025/26',
};

export default function FixturesPage() {
  const fixtures = getFixtures();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Fixtures</h1>
        <p className="text-surface-200 mt-1">Upcoming matches — 2025/26 season</p>
      </div>
      <FixtureList fixtures={fixtures} />
    </div>
  );
}
