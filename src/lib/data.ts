/**
 * Data abstraction layer — the ONLY file pages/components should import data from.
 * To swap in a real API, replace the function bodies here. All types and signatures stay the same.
 */

import type { Competition, Match, Fixture, Player, LeagueTable, SeasonSummary } from '@/lib/types';
import { mockMatches } from '@/lib/mock/matches';
import { mockFixtures } from '@/lib/mock/fixtures';
import { mockPlayers } from '@/lib/mock/players';
import { mockTables } from '@/lib/mock/tables';

/** All completed matches, newest-first */
export function getResults(): Match[] {
  return [...mockMatches].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Completed matches filtered by competition, newest-first */
export function getResultsByCompetition(competition: Competition): Match[] {
  return getResults().filter((m) => m.competition === competition);
}

/** All upcoming fixtures, soonest-first */
export function getFixtures(): Fixture[] {
  return [...mockFixtures].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

/** First N upcoming fixtures */
export function getNextFixtures(count = 3): Fixture[] {
  return getFixtures().slice(0, count);
}

/** All players, sorted by goals descending */
export function getPlayers(): Player[] {
  return [...mockPlayers].sort((a, b) => b.goals - a.goals);
}

/** All league tables */
export function getTables(): LeagueTable[] {
  return mockTables;
}

/** League table for one competition */
export function getTable(competition: Competition): LeagueTable | undefined {
  return mockTables.find((t) => t.competition === competition);
}

/** Aggregated season summary — optionally filtered by competition */
export function getSeasonSummary(competition?: Competition): SeasonSummary {
  const matches = competition
    ? mockMatches.filter((m) => m.competition === competition)
    : mockMatches;

  let won = 0, drawn = 0, lost = 0, goalsFor = 0, goalsAgainst = 0;

  for (const match of matches) {
    const isHome = match.homeTeam === 'Liverpool';
    const lfcScore = isHome ? match.homeScore : match.awayScore;
    const oppScore = isHome ? match.awayScore : match.homeScore;
    goalsFor += lfcScore;
    goalsAgainst += oppScore;
    if (lfcScore > oppScore) won++;
    else if (lfcScore === oppScore) drawn++;
    else lost++;
  }

  const played = matches.length;
  const points = won * 3 + drawn;

  // Get current PL position from table if no competition filter
  const plTable = getTable('premier-league');
  const lfcStanding = plTable?.standings.find((s) => s.isLiverpool);

  return {
    played,
    won,
    drawn,
    lost,
    goalsFor,
    goalsAgainst,
    goalDifference: goalsFor - goalsAgainst,
    points,
    position: competition ? undefined : lfcStanding?.position,
  };
}

/** Last N match results */
export function getRecentForm(count = 5): Match[] {
  return getResults().slice(0, count);
}
