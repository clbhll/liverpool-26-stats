import type { Player } from '@/lib/types';

interface PlayerRowProps {
  player: Player;
}

const positionColor: Record<string, string> = {
  GK: 'bg-amber-800/60 text-amber-200',
  DEF: 'bg-blue-900/60 text-blue-200',
  MID: 'bg-emerald-900/60 text-emerald-200',
  FWD: 'bg-lfc-red/40 text-red-200',
};

export default function PlayerRow({ player }: PlayerRowProps) {
  return (
    <tr>
      <td className="font-mono text-surface-200">{player.squadNumber}</td>
      <td className="font-semibold text-white">{player.name}</td>
      <td>
        <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${positionColor[player.position]}`}>
          {player.position}
        </span>
      </td>
      <td className="hidden sm:table-cell text-surface-200">{player.nationality}</td>
      <td className="text-center tabular-nums">{player.appearances}</td>
      <td className="text-center tabular-nums font-semibold text-white">{player.goals}</td>
      <td className="text-center tabular-nums text-white">{player.assists}</td>
      <td className="hidden md:table-cell text-center tabular-nums text-surface-200">{player.yellowCards}</td>
      <td className="hidden md:table-cell text-center tabular-nums text-surface-200">{player.redCards}</td>
      <td className="hidden lg:table-cell text-center tabular-nums text-surface-200">
        {player.minutesPlayed.toLocaleString()}
      </td>
      <td className="hidden lg:table-cell text-center tabular-nums">
        <span className={`font-medium ${player.averageRating >= 7.5 ? 'text-lfc-gold' : player.averageRating >= 7 ? 'text-emerald-400' : 'text-surface-200'}`}>
          {player.averageRating.toFixed(1)}
        </span>
      </td>
      {player.position === 'GK' ? (
        <td className="hidden lg:table-cell text-center tabular-nums text-surface-200">
          {player.cleanSheets ?? '—'}
        </td>
      ) : (
        <td className="hidden lg:table-cell text-center text-surface-200/40">—</td>
      )}
    </tr>
  );
}
