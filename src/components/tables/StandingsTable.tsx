import type { LeagueTable } from '@/lib/types';
import { getCompetitionName } from '@/lib/utils';

interface StandingsTableProps {
  table: LeagueTable;
}

const formColor = {
  W: 'bg-emerald-600 text-white',
  D: 'bg-surface-600 text-surface-200',
  L: 'bg-lfc-red/80 text-white',
};

export default function StandingsTable({ table }: StandingsTableProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs text-surface-200">
          {getCompetitionName(table.competition)} · {table.season}
        </p>
        <p className="text-xs text-surface-200/60">
          Updated {table.lastUpdated}
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-surface-600">
        <table className="stats-table">
          <thead>
            <tr>
              <th className="w-8 text-center">#</th>
              <th className="text-left">Team</th>
              <th className="text-center">P</th>
              <th className="text-center">W</th>
              <th className="text-center hidden sm:table-cell">D</th>
              <th className="text-center hidden sm:table-cell">L</th>
              <th className="text-center hidden md:table-cell">GF</th>
              <th className="text-center hidden md:table-cell">GA</th>
              <th className="text-center">GD</th>
              <th className="text-center font-bold">Pts</th>
              <th className="hidden lg:table-cell text-center">Form</th>
            </tr>
          </thead>
          <tbody>
            {table.standings.map((row) => (
              <tr
                key={row.teamName}
                className={row.isLiverpool ? 'lfc-row' : ''}
              >
                <td className="text-center text-surface-200">{row.position}</td>
                <td className={`font-medium ${row.isLiverpool ? 'text-white' : 'text-white/90'}`}>
                  {row.teamName}
                  {row.isLiverpool && (
                    <span className="ml-1.5 text-xs text-lfc-red font-normal">(LFC)</span>
                  )}
                </td>
                <td className="text-center tabular-nums text-surface-200">{row.played}</td>
                <td className="text-center tabular-nums font-semibold text-emerald-400">{row.won}</td>
                <td className="text-center tabular-nums hidden sm:table-cell text-surface-200">{row.drawn}</td>
                <td className="text-center tabular-nums hidden sm:table-cell text-surface-200">{row.lost}</td>
                <td className="text-center tabular-nums hidden md:table-cell text-surface-200">{row.goalsFor}</td>
                <td className="text-center tabular-nums hidden md:table-cell text-surface-200">{row.goalsAgainst}</td>
                <td className={`text-center tabular-nums ${row.goalDifference > 0 ? 'text-emerald-400' : row.goalDifference < 0 ? 'text-red-400' : 'text-surface-200'}`}>
                  {row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}
                </td>
                <td className="text-center tabular-nums font-bold text-white">{row.points}</td>
                <td className="hidden lg:table-cell">
                  <div className="flex gap-1 justify-center">
                    {row.form.map((r, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${formColor[r]}`}
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
