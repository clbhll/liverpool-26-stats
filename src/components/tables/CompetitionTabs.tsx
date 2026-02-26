'use client';

import { useState } from 'react';
import Tabs from '@/components/ui/Tabs';
import StandingsTable from '@/components/tables/StandingsTable';
import type { LeagueTable, Competition } from '@/lib/types';

const tabs = [
  { id: 'premier-league', label: 'Premier League' },
  { id: 'champions-league', label: 'UCL' },
  { id: 'fa-cup', label: 'FA Cup' },
  { id: 'carabao-cup', label: 'Carabao Cup' },
];

interface CompetitionTabsProps {
  tables: LeagueTable[];
}

export default function CompetitionTabs({ tables }: CompetitionTabsProps) {
  const [activeTab, setActiveTab] = useState<Competition>('premier-league');

  const activeTable = tables.find((t) => t.competition === activeTab);

  return (
    <div className="space-y-6">
      <Tabs tabs={tabs} activeTab={activeTab} onChange={(id) => setActiveTab(id as Competition)} />
      {activeTable ? (
        <StandingsTable table={activeTable} />
      ) : (
        <p className="text-surface-200">No data available for this competition.</p>
      )}
    </div>
  );
}
