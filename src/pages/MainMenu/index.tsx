import React, { useState } from 'react';
import { TopBar } from '../../components/layout';
import { Win95Button, RadioButton, TextInput, ListBox } from '../../components/common';

const MainMenu: React.FC = () => {
  const [gameMode, setGameMode] = useState<'new' | 'continue'>('new');
  const [fileName, setFileName] = useState('');
  const [selectedSaveIndex, setSelectedSaveIndex] = useState(-1);
  
  // Lista de jogos salvos (mock - depois virá do backend)
  const savedGames: string[] = [];

  const handleOk = () => {
    if (gameMode === 'new') {
      console.log('Iniciar novo jogo:', fileName);
      // TODO: Navegar para seleção de time
    } else {
      console.log('Continuar jogo:', savedGames[selectedSaveIndex]);
      // TODO: Carregar jogo salvo
    }
  };

  const handleCancel = () => {
    console.log('Cancelar');
    // TODO: Voltar para tela anterior ou sair
  };

  return (
    <div className="main-menu-container">
      {/* Barra superior */}
      <TopBar />

      {/* Conteúdo principal */}
      <div className="main-menu-content">
        {/* Área verde principal */}
        <div className="main-menu-sections">
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
                height="400px"
              />
            </div>
          </div>
        </div>

        {/* Botões laterais */}
        <div className="menu-buttons">
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
    </div>
  );
};

export default MainMenu;