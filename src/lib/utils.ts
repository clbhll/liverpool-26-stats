import type { Competition, Match } from '@/lib/types';

/** Format a date string (YYYY-MM-DD) to e.g. "Sat 15 Feb 2026" */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00Z');
  return date.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** Format a date string to short form e.g. "15 Feb" */
export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00Z');
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  });
}

/** Format a date string to month + year e.g. "March 2026" */
export function formatMonth(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00Z');
  return date.toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** Get YYYY-MM key for grouping fixtures by month */
export function getMonthKey(dateStr: string): string {
  return dateStr.slice(0, 7);
}

/** Human-readable competition name */
export function getCompetitionName(competition: Competition): string {
  const names: Record<Competition, string> = {
    'premier-league': 'Premier League',
    'champions-league': 'Champions League',
    'fa-cup': 'FA Cup',
    'carabao-cup': 'Carabao Cup',
  };
  return names[competition];
}

/** Short competition label for badges */
export function getCompetitionShort(competition: Competition): string {
  const shorts: Record<Competition, string> = {
    'premier-league': 'PL',
    'champions-league': 'UCL',
    'fa-cup': 'FAC',
    'carabao-cup': 'CC',
  };
  return shorts[competition];
}

/** Competition badge color classes */
export function getCompetitionColor(competition: Competition): string {
  const colors: Record<Competition, string> = {
    'premier-league': 'bg-violet-800/60 text-violet-200',
    'champions-league': 'bg-blue-900/60 text-blue-200',
    'fa-cup': 'bg-red-900/60 text-red-200',
    'carabao-cup': 'bg-emerald-900/60 text-emerald-200',
  };
  return colors[competition];
}

/** Determine match result from Liverpool's perspective */
export function getMatchResult(match: Match): 'W' | 'D' | 'L' {
  const isHome = match.homeTeam === 'Liverpool';
  const lfcScore = isHome ? match.homeScore : match.awayScore;
  const oppScore = isHome ? match.awayScore : match.homeScore;
  if (lfcScore > oppScore) return 'W';
  if (lfcScore === oppScore) return 'D';
  return 'L';
}

/** Result color classes */
export function getResultColor(result: 'W' | 'D' | 'L'): string {
  return {
    W: 'bg-emerald-600 text-white',
    D: 'bg-surface-600 text-surface-200',
    L: 'bg-lfc-red text-white',
  }[result];
}

/** Get opponent name from a match */
export function getOpponent(match: Match): string {
  return match.homeTeam === 'Liverpool' ? match.awayTeam : match.homeTeam;
}

/** Score string formatted as "3 - 1" */
export function formatScore(match: Match): string {
  return `${match.homeScore} – ${match.awayScore}`;
}

/** Liverpool goals scored in a match */
export function getLfcScore(match: Match): number {
  return match.homeTeam === 'Liverpool' ? match.homeScore : match.awayScore;
}

/** Opponent goals in a match */
export function getOppScore(match: Match): number {
  return match.homeTeam === 'Liverpool' ? match.awayScore : match.homeScore;
}

/** Format minutes to "Xh Ym" or just "Ym" */
export function formatMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
}

/** Format a decimal rating to 1 dp */
export function formatRating(rating: number): string {
  return rating.toFixed(1);
}
