import React from 'react';

interface PlayerRowProps {
  playerNumber: number;
  playerName: string;
  teamName: string;
  onPlayerNameChange: (name: string) => void;
}

const PlayerRow: React.FC<PlayerRowProps> = ({
  playerNumber,
  playerName,
  teamName,
  onPlayerNameChange,
}) => {
  return (
    <div className="player-row">
      <label className="player-label">
        Jogador {playerNumber}
      </label>
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