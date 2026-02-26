import PlayerTable from '@/components/players/PlayerTable';
import { getPlayers } from '@/lib/data';

export const metadata = {
  title: 'Players | LFC Stats 2025/26',
};

export default function PlayersPage() {
  const players = getPlayers();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Players</h1>
        <p className="text-surface-200 mt-1">Squad statistics — 2025/26 season. Click column headers to sort.</p>
      </div>
      <PlayerTable players={players} />
    </div>
  );
}
