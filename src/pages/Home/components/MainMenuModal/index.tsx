import React, { useState } from 'react';
import { Win95Window, Win95Button, RadioButton, TextInput, ListBox } from '../../../../components/common';

interface MainMenuModalProps {
  onClose: () => void;
  onStartNewGame: () => void;
}

const MainMenuModal: React.FC<MainMenuModalProps> = ({ onClose, onStartNewGame }) => {
  const [gameMode, setGameMode] = useState<'new' | 'continue'>('new');
  const [fileName, setFileName] = useState('');
  const [selectedSaveIndex, setSelectedSaveIndex] = useState(-1);
  
  // Lista de jogos salvos (mock - depois virá do backend)
  const savedGames: string[] = [];

  const handleOk = () => {
    if (gameMode === 'new') {
      if (!fileName.trim()) {
        alert('Por favor, insira um nome para o ficheiro');
        return;
      }
      console.log('Iniciar novo jogo:', fileName);
      onStartNewGame();
    } else {
      if (selectedSaveIndex === -1) {
        alert('Por favor, selecione um jogo salvo');
        return;
      }
      console.log('Continuar jogo:', savedGames[selectedSaveIndex]);
      // TODO: Carregar jogo salvo
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      {/* Modal */}
      <div className="modal-container-menu" onClick={(e) => e.stopPropagation()}>
        <Win95Window
          title="Elifoot 98"
          onClose={handleCancel}
        >
          <div className="menu-modal-content">
            {/* Área verde com as seções */}
            <div className="menu-modal-sections">
              {/* Seção: Novo Jogo */}
              <div className="menu-section">
                <RadioButton
                  id="new-game"
                  name="game-mode"
                  value="new"
                  checked={gameMode === 'new'}
                  onChange={(value) => setGameMode(value as 'new' | 'continue')}
                  label="Quero começar um jogo do início"
                />
                
                <div className="menu-section-content">
                  <label htmlFor="file-name" className="input-label">
                    Nome do ficheiro (8 letras):
                  </label>
                  <TextInput
                    id="file-name"
                    value={fileName}
                    onChange={setFileName}
                    maxLength={8}
                    disabled={gameMode !== 'new'}
                  />
                </div>
              </div>

              {/* Seção: Continuar Jogo */}
              <div className="menu-section">
                <RadioButton
                  id="continue-game"
                  name="game-mode"
                  value="continue"
                  checked={gameMode === 'continue'}
                  onChange={(value) => setGameMode(value as 'new' | 'continue')}
                  label="Quero continuar um jogo"
                />
                
                <div className="menu-section-content">
                  <label className="input-label">
                    Jogos gravados:
                  </label>
                  <ListBox
                    items={savedGames}
                    selectedIndex={selectedSaveIndex}
                    onSelect={setSelectedSaveIndex}
                    height="250px"
                  />
                </div>
              </div>
            </div>

            {/* Botões laterais */}
            <div className="modal-buttons">
              <Win95Button
                onClick={handleOk}
                icon={<span className="text-green">✓</span>}
              >
                OK
              </Win95Button>
              <Win95Button
                onClick={handleCancel}
                icon={<span style={{ color: '#dc2626' }}>✗</span>}
              >
                Cancelar
              </Win95Button>
            </div>
          </div>
        </Win95Window>
      </div>
    </div>
  );
};

export default MainMenuModal;