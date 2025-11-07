import React from 'react';

interface PlayerRowProps {
  playerNumber: number;
  playerName: string;
  teamName: string;
  onPlayerNameChange: (name: string) => void;
  isPlayerSelected?: boolean
}

const PlayerRow: React.FC<PlayerRowProps> = ({
  playerNumber,
  playerName,
  teamName,
  onPlayerNameChange,
  isPlayerSelected
}) => {
  return (
    <div className="player-row">
      <label className="player-label">
        Jogador {playerNumber}
      </label>
      <span>{isPlayerSelected ? 'o' : '-'}</span>
      <input
        type="text"
        value={playerName}
        onChange={(e) => onPlayerNameChange(e.target.value)}
        className="player-name-input"
        maxLength={20}
      />
      <div className="player-team">
        {teamName}
      </div>
    </div>
  );
};

export default PlayerRow;