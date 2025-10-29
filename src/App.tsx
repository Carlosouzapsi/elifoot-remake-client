
import { useState } from 'react';
import Home from "./pages/Home";
import TeamView from "./pages/TeamView";
import type { Team } from './data/teams';

interface Player {
  name: string;
  team: Team;
}

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'team'>('home');
  const [gameData, setGameData] = useState<{
    players: Player[];
    selectedCountryIds: number[];
    currency: string;
  } | null>(null);

  const handleGameStart = (players: Player[], selectedCountryIds: number[], currency: string) => {
    setGameData({ players, selectedCountryIds, currency });
    setCurrentView('team');
  };

  if (currentView === 'team' && gameData) {
    return <TeamView />;
  }

  return <Home onGameStart={handleGameStart} />;
}

export default App;
