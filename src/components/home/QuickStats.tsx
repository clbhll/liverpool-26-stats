import type { Player } from '@/lib/types';

interface QuickStatsProps {
  topScorer: Player;
  assistsLeader: Player;
  cleanSheetKeeper: Player;
}

interface StatItemProps {
  label: string;
  playerName: string;
  value: number;
  unit: string;
}

function StatItem({ label, playerName, value, unit }: StatItemProps) {
  return (
    <div className="bg-surface-800 rounded-lg border border-surface-600 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-surface-200 mb-2">{label}</p>
      <p className="text-white font-semibold truncate">{playerName}</p>
      <p className="text-lfc-gold text-2xl font-bold mt-1">
        {value} <span className="text-sm font-normal text-surface-200">{unit}</span>
      </p>
    </div>
  );
}

export default function QuickStats({ topScorer, assistsLeader, cleanSheetKeeper }: QuickStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatItem
        label="Top Scorer"
        playerName={topScorer.name}
        value={topScorer.goals}
        unit="goals"
      />
      <StatItem
        label="Assists Leader"
        playerName={assistsLeader.name}
        value={assistsLeader.assists}
        unit="assists"
      />
      <StatItem
        label="Clean Sheets"
        playerName={cleanSheetKeeper.name}
        value={cleanSheetKeeper.cleanSheets ?? 0}
        unit="clean sheets"
      />
    </div>
  );
}
