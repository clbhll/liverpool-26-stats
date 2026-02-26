import { getMatchResult, getResultColor, getOpponent, formatDateShort } from '@/lib/utils';
import type { Match } from '@/lib/types';

interface RecentFormProps {
  matches: Match[];
}

export default function RecentForm({ matches }: RecentFormProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {matches.map((match) => {
        const result = getMatchResult(match);
        return (
          <div key={match.id} className="flex flex-col items-center gap-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${getResultColor(result)}`}
            >
              {result}
            </div>
            <span className="text-xs text-surface-200 text-center max-w-[5rem] truncate">
              {getOpponent(match)}
            </span>
            <span className="text-xs text-surface-200/60">
              {formatDateShort(match.date)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
