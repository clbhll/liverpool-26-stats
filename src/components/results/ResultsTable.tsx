'use client';

import { useState } from 'react';
import MatchRow from '@/components/results/MatchRow';
import Tabs from '@/components/ui/Tabs';
import type { Match, Competition } from '@/lib/types';

const ALL = 'all';

const competitionTabs = [
  { id: ALL, label: 'All' },
  { id: 'premier-league', label: 'Premier League' },
  { id: 'champions-league', label: 'UCL' },
  { id: 'fa-cup', label: 'FA Cup' },
  { id: 'carabao-cup', label: 'Carabao Cup' },
];

interface ResultsTableProps {
  matches: Match[];
}

export default function ResultsTable({ matches }: ResultsTableProps) {
  const [activeTab, setActiveTab] = useState(ALL);

  const filtered =
    activeTab === ALL
      ? matches
      : matches.filter((m) => m.competition === (activeTab as Competition));

  return (
    <div className="space-y-4">
      <Tabs tabs={competitionTabs} activeTab={activeTab} onChange={setActiveTab} />

      <div className="overflow-x-auto rounded-lg border border-surface-600">
        <table className="stats-table">
          <thead>
            <tr>
              <th className="w-10">Res</th>
              <th className="hidden sm:table-cell">Date</th>
              <th>Comp</th>
              <th>Venue</th>
              <th>Opponent</th>
              <th className="text-center">Score</th>
              <th className="hidden lg:table-cell text-center">Poss</th>
              <th className="hidden lg:table-cell text-center">SoT/Sh</th>
              <th className="hidden lg:table-cell text-center">xG</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-8 text-surface-200">
                  No results found
                </td>
              </tr>
            ) : (
              filtered.map((match) => <MatchRow key={match.id} match={match} />)
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-surface-200">
        {filtered.length} result{filtered.length !== 1 ? 's' : ''}
      </p>
    </div>
  );
}
