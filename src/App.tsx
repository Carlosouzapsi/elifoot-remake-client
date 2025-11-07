
import { useState, useEffect } from 'react';
import Home from "./pages/Home";
import TeamView from "./pages/TeamView";
import RoundResultsView from "./pages/RoundResultsView";
import LeagueTableView from "./pages/LeagueTableView";
import type { Team } from './data/teams';

interface Player {
  name: string;
  team: Team;
}

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'team' | 'round-results' | 'league-table'>('home');
  const [gameData, setGameData] = useState<{
    players: Player[];
    selectedCountryIds: number[];
    currency: string;
  } | null>(null);

  useEffect(() => {
    try {
      const savedData = localStorage.getItem('elifootSaveData');
      if (savedData) {
        const gameState = JSON.parse(savedData);
        // Verificação básica para garantir que os dados são válidos
        if (gameState && gameState.players) {
          setGameData(gameState);
          setCurrentView('team');
        }
      }
    } catch (error) {
      console.error("Erro ao carregar o estado do jogo:", error);
      // Opcional: Limpar dados inválidos
      localStorage.removeItem('elifootSaveData');
    }
  }, []);

  const handleGameStart = (players: Player[], selectedCountryIds: number[], currency: string) => {
    const newGameData = { players, selectedCountryIds, currency };
    setGameData(newGameData);
    setCurrentView('team');
    // Salva o novo jogo também
    try {
      localStorage.setItem('elifootSaveData', JSON.stringify(newGameData));
    } catch (error) {
      console.error("Erro ao salvar o estado do jogo:", error);
    }
  };

  const handlePlayMatch = () => {
    setCurrentView('round-results');
  };

  const handleViewTable = () => {
    setCurrentView('league-table');
  };

  if (currentView === 'team' && gameData) {
    return <TeamView onPlayMatch={handlePlayMatch} />;
  }

  if (currentView === 'round-results') {
    return <RoundResultsView onViewTable={handleViewTable} />;
  }

  if (currentView === 'league-table') {
    return <LeagueTableView />;
  }

  return <Home onGameStart={handleGameStart} />;
}

export default App;
