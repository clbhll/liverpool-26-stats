'use client';

import { useState, useMemo } from 'react';
import PlayerRow from '@/components/players/PlayerRow';
import type { Player, PlayerPosition } from '@/lib/types';

type SortKey = keyof Pick<Player, 'goals' | 'assists' | 'appearances' | 'yellowCards' | 'redCards' | 'minutesPlayed' | 'averageRating' | 'squadNumber'>;

const positionFilters: { id: PlayerPosition | 'ALL'; label: string }[] = [
  { id: 'ALL', label: 'All' },
  { id: 'GK', label: 'GK' },
  { id: 'DEF', label: 'DEF' },
  { id: 'MID', label: 'MID' },
  { id: 'FWD', label: 'FWD' },
];

interface PlayerTableProps {
  players: Player[];
}

interface SortConfig {
  key: SortKey;
  dir: 'asc' | 'desc';
}

interface HeaderCellProps {
  label: string;
  sortKey: SortKey;
  currentSort: SortConfig;
  onSort: (key: SortKey) => void;
  className?: string;
}

function HeaderCell({ label, sortKey, currentSort, onSort, className = '' }: HeaderCellProps) {
  const isActive = currentSort.key === sortKey;
  return (
    <th
      className={`cursor-pointer select-none hover:text-white transition-colors ${isActive ? 'text-white' : ''} ${className}`}
      onClick={() => onSort(sortKey)}
    >
      <span className="flex items-center gap-1 justify-center">
        {label}
        {isActive && (
          <span className="text-lfc-gold">{currentSort.dir === 'desc' ? '↓' : '↑'}</span>
        )}
      </span>
    </th>
  );
}

export default function PlayerTable({ players }: PlayerTableProps) {
  const [posFilter, setPosFilter] = useState<PlayerPosition | 'ALL'>('ALL');
  const [sort, setSort] = useState<SortConfig>({ key: 'goals', dir: 'desc' });

  function handleSort(key: SortKey) {
    setSort((prev) =>
      prev.key === key
        ? { key, dir: prev.dir === 'desc' ? 'asc' : 'desc' }
        : { key, dir: 'desc' }
    );
  }

  const filtered = useMemo(() => {
    const base = posFilter === 'ALL' ? players : players.filter((p) => p.position === posFilter);
    return [...base].sort((a, b) => {
      const mul = sort.dir === 'desc' ? -1 : 1;
      return (a[sort.key] - b[sort.key]) * mul;
    });
  }, [players, posFilter, sort]);

  return (
    <div className="space-y-4">
      {/* Position filter */}
      <div className="flex gap-1 p-1 bg-surface-800 rounded-lg border border-surface-600 w-fit">
        {positionFilters.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setPosFilter(id)}
            className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
              posFilter === id
                ? 'bg-lfc-red text-white'
                : 'text-surface-200 hover:text-white hover:bg-surface-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-lg border border-surface-600">
        <table className="stats-table">
          <thead>
            <tr>
              <th className="text-left">No.</th>
              <th className="text-left">Player</th>
              <th className="text-left">Pos</th>
              <th className="hidden sm:table-cell text-left">Nationality</th>
              <HeaderCell label="Apps" sortKey="appearances" currentSort={sort} onSort={handleSort} />
              <HeaderCell label="Goals" sortKey="goals" currentSort={sort} onSort={handleSort} />
              <HeaderCell label="Ast" sortKey="assists" currentSort={sort} onSort={handleSort} />
              <HeaderCell label="YC" sortKey="yellowCards" currentSort={sort} onSort={handleSort} className="hidden md:table-cell" />
              <HeaderCell label="RC" sortKey="redCards" currentSort={sort} onSort={handleSort} className="hidden md:table-cell" />
              <HeaderCell label="Mins" sortKey="minutesPlayed" currentSort={sort} onSort={handleSort} className="hidden lg:table-cell" />
              <HeaderCell label="Rtg" sortKey="averageRating" currentSort={sort} onSort={handleSort} className="hidden lg:table-cell" />
              <th className="hidden lg:table-cell text-center">CS</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((player) => (
              <PlayerRow key={player.id} player={player} />
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-surface-200">{filtered.length} player{filtered.length !== 1 ? 's' : ''}</p>
    </div>
  );
}
