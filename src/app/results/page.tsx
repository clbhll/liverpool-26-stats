import SectionHeader from '@/components/ui/SectionHeader';
import ResultsTable from '@/components/results/ResultsTable';
import { getResults } from '@/lib/data';

export const metadata = {
  title: 'Results | LFC Stats 2025/26',
};

export default function ResultsPage() {
  const matches = getResults();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Results</h1>
        <p className="text-surface-200 mt-1">All completed matches — 2025/26 season</p>
      </div>
      <SectionHeader title="Match Results" subtitle="Filter by competition" />
      <ResultsTable matches={matches} />
    </div>
  );
}
