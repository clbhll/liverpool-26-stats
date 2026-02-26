import CompetitionTabs from '@/components/tables/CompetitionTabs';
import { getTables } from '@/lib/data';

export const metadata = {
  title: 'Tables | LFC Stats 2025/26',
};

export default function TablesPage() {
  const tables = getTables();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">League Tables</h1>
        <p className="text-surface-200 mt-1">Current standings across all competitions</p>
      </div>
      <CompetitionTabs tables={tables} />
    </div>
  );
}
