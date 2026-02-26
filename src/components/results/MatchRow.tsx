import { CompetitionBadge, VenueBadge } from '@/components/ui/Badge';
import {
  formatDate,
  getMatchResult,
  getResultColor,
  getOpponent,
  getLfcScore,
  getOppScore,
} from '@/lib/utils';
import type { Match } from '@/lib/types';

interface MatchRowProps {
  match: Match;
}

export default function MatchRow({ match }: MatchRowProps) {
  const result = getMatchResult(match);
  const lfcScore = getLfcScore(match);
  const oppScore = getOppScore(match);
  const opponent = getOpponent(match);

  return (
    <tr>
      <td>
        <span
          className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${getResultColor(result)}`}
        >
          {result}
        </span>
      </td>
      <td className="hidden sm:table-cell text-surface-200">
        {formatDate(match.date)}
      </td>
      <td>
        <CompetitionBadge competition={match.competition} short />
      </td>
      <td>
        <VenueBadge venue={match.venue} />
      </td>
      <td className="font-medium text-white">{opponent}</td>
      <td className="text-center font-bold tabular-nums">
        <span className={result === 'W' ? 'text-emerald-400' : result === 'L' ? 'text-lfc-red' : 'text-surface-200'}>
          {lfcScore}–{oppScore}
        </span>
      </td>
      <td className="hidden lg:table-cell text-surface-200 text-center">
        {match.stats.possession}%
      </td>
      <td className="hidden lg:table-cell text-surface-200 text-center">
        {match.stats.shotsOnTarget}/{match.stats.shots}
      </td>
      <td className="hidden lg:table-cell text-surface-200 text-center">
        {match.stats.xG.toFixed(1)}
      </td>
    </tr>
  );
}
