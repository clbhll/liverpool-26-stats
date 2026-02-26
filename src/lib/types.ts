export type Competition = 'premier-league' | 'champions-league' | 'fa-cup' | 'carabao-cup';
export type PlayerPosition = 'GK' | 'DEF' | 'MID' | 'FWD';

export interface MatchStats {
  shots: number;
  shotsOnTarget: number;
  possession: number;
  xG: number;
  corners: number;
  fouls: number;
  yellowCards: number;
  redCards: number;
}

export interface Match {
  id: string;
  date: string;
  competition: Competition;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  venue: 'home' | 'away' | 'neutral';
  stats: MatchStats;
}

export interface Fixture {
  id: string;
  date: string;
  kickoffTime: string;
  competition: Competition;
  opponent: string;
  venue: 'home' | 'away' | 'neutral';
  venueStadium: string;
  tvBroadcaster?: string;
}

export interface Player {
  id: string;
  name: string;
  position: PlayerPosition;
  squadNumber: number;
  nationality: string;
  appearances: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  minutesPlayed: number;
  averageRating: number;
  cleanSheets?: number;
}

export interface Standing {
  position: number;
  teamName: string;
  isLiverpool: boolean;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
}

export interface LeagueTable {
  competition: Competition;
  season: string;
  lastUpdated: string;
  standings: Standing[];
}

export interface SeasonSummary {
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  position?: number;
}
