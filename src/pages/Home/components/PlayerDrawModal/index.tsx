import React, { useState, useEffect } from 'react';
import { Win95Window, Win95Button } from '../../../../components/common';
import { getTeamsFromCountries, drawTeamsForPlayers } from '../../../../data/teams';
import type { Team } from '../../../../data/teams';

interface PlayerDrawModalProps {
  onClose: () => void;
  onComplete: (players: Array<{ name: string; team: Team }>) => void;
  selectedCountryIds: number[];
}

interface Player {
  name: string;
  team: Team;
}

const PlayerDrawModal: React.FC<PlayerDrawModalProps> = ({ 
  onClose, 
  onComplete,
  selectedCountryIds 
}) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isDrawn, setIsDrawn] = useState(false);

  // Inicializar jogadores vazios
  useEffect(() => {
    const initialPlayers: Player[] = Array.from({ length: 6 }, (_, i) => ({
      name: i === 0 ? 'Carlos' : '',
      team: { id: 0, name: '', country: '', countryId: 0 }
    }));
    setPlayers(initialPlayers);
  }, []);

  const handleDraw = () => {
    // Filtrar apenas jogadores com nome preenchido
    const playersWithNames = players.filter(p => p.name.trim() !== '');
    
    if (playersWithNames.length === 0) {
      alert('Por favor, preencha o nome de pelo menos um jogador!');
      return;
    }

    // Obter todas as equipes dos países selecionados
    const availableTeams = getTeamsFromCountries(selectedCountryIds);
    
    if (availableTeams.length < playersWithNames.length) {
      alert('Não há equipes suficientes nos países selecionados!');
      return;
    }

    // Sortear equipes apenas para jogadores com nome
    const drawnTeams = drawTeamsForPlayers(availableTeams, playersWithNames.length);
    
    // Atualizar jogadores com as equipes sorteadas
    let teamIndex = 0;
    const updatedPlayers = players.map((player) => {
      if (player.name.trim() !== '') {
        return {
          ...player,
          team: drawnTeams[teamIndex++]
        };
      }
      return player;
    });
    
    setPlayers(updatedPlayers);
    setIsDrawn(true);
  };

  const handlePlayerNameChange = (index: number, name: string) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = { ...updatedPlayers[index], name };
    setPlayers(updatedPlayers);
  };

  const handleConfirm = () => {
    if (!isDrawn) {
      alert('Por favor, clique em "Sortear equipas" primeiro!');
      return;
    }
    
    // Validar se pelo menos 1 jogador tem equipe sorteada
    const playersWithTeams = players.filter(p => p.name.trim() !== '' && p.team.id !== 0);
    if (playersWithTeams.length === 0) {
      alert('Pelo menos um jogador deve ter uma equipe sorteada!');
      return;
    }
    
    // Retornar apenas jogadores com equipes sorteadas
    onComplete(playersWithTeams);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      {/* Modal */}
      <div className="modal-container-large" onClick={(e) => e.stopPropagation()}>
        <Win95Window
          title="Jogadores"
          onClose={handleCancel}
        >
          <div className="player-draw-content">
            {/* Área cinza com a tabela */}
            <div className="player-draw-table">
              {/* Cabeçalhos */}
              <div className="player-table-header">
                <div className="player-header-label"></div>
                <div className="player-header-name">Nome</div>
                <div className="player-header-team">Equipa</div>
              </div>

              {/* Linhas de jogadores */}
              <div className="player-table-body">
                {players.map((player, index) => (
                  <div key={index} className="player-row">
                    <label className="player-label">
                      Jogador {index + 1}
                    </label>
                    <input
                      type="text"
                      value={player.name}
                      onChange={(e) => handlePlayerNameChange(index, e.target.value)}
                      className="player-name-input"
                      maxLength={20}
                    />
                    <div className={isDrawn ? "player-team" : "player-team-placeholder"}>
                      {isDrawn ? player.team.name : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botões */}
            <div className="player-draw-button-container">
              {!isDrawn ? (
                <Win95Button onClick={handleDraw}>
                  Sortear equipas
                </Win95Button>
              ) : (
                <Win95Button onClick={handleConfirm}>
                  Fechar
                </Win95Button>
              )}
            </div>
          </div>
        </Win95Window>
      </div>
    </div>
  );
};

export default PlayerDrawModal;