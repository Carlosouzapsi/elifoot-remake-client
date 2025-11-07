import React, { useState } from 'react';
import { bragantinoplayers } from '../../data/players';
import type { Player } from '../../data/players';

interface TeamViewProps {
  onPlayMatch: () => void;
}

const TeamView: React.FC<TeamViewProps> = ({ onPlayMatch }) => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player>(bragantinoplayers[0]);
  const [activeMenu, setActiveMenu] = useState<string>('jogo');
  const [showRenewContract, setShowRenewContract] = useState(false);
  const [newSalary, setNewSalary] = useState(1000);
  const [showFormationMenu, setShowFormationMenu] = useState(false);
  const [selectedPlayerIds, setSelectedPlayerIds] = useState<number[]>([]);
  const [isFormationSelected, setIsFormationSelected] = useState(false);
  
  // Dados mock
  const teamName = 'BRAGANTINO';
  const opponent = 'TUBARÃO';
  const division = '4ª Divisão';
  const country = 'Brasil';
  const referee = 'João Silva';
  const cashInBank = 1250000;
  const morale = 75; // 0-100
  
  // Dados financeiros
  const finances = {
    receitas: {
      bilhetes: 0,
      jogadoresVendidos: 0,
      premios: 0
    },
    despesas: {
      salarios: 0,
      jogadoresComprados: 0,
      bancadas: 0,
      juros: 0
    },
    totalReceitas: 0,
    totalDespesas: 0,
    saldo: 0,
    totalSalarios: 37500,
    jurosEmprestimo: 0
  };

  const togglePlayerSelection = (playerId: number) => {
    setSelectedPlayerIds(prevIds => {
      if (prevIds.includes(playerId)) {
        return prevIds.filter(id => id !== playerId);
      } else {
        return [...prevIds, playerId];
      }
    });
  };

  const selectBestEleven = () => {
    const sortedPlayers = [...bragantinoplayers].sort((a, b) => b.skill - a.skill);
    const bestElevenIds = sortedPlayers.slice(0, 11).map(p => p.id);
    setSelectedPlayerIds(bestElevenIds);
  };

  const handleFormationSelection = () => {
    setShowFormationMenu(false);
    setIsFormationSelected(true);
    selectBestEleven();
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000', display: 'flex', flexDirection: 'column' }}>
      {/* Menu Superior */}
      <div className="team-view-top-menu">
        <button className="team-view-menu-item">Elifoot</button>
        <button
          className="team-view-menu-item"
          onClick={() => setShowFormationMenu(!showFormationMenu)}
        >
          Seleccionar
        </button>
        <button className="team-view-menu-item">Equipa</button>
        <button className="team-view-menu-item">Jogador</button>
        <button className="team-view-menu-item">Campeonato</button>
        <button className="team-view-menu-item">Treinador</button>
      </div>

      {/* Dropdown de Formações */}
      {showFormationMenu && (
        <div className="formation-dropdown">
          <div
            className="formation-item"
            onClick={handleFormationSelection}
          >
            3-3-4 <span className="shortcut">F2</span>
          </div>
          <div className="formation-item disabled">
            4-2-4 <span className="shortcut">F3</span>
          </div>
          <div
            className="formation-item"
            onClick={handleFormationSelection}
          >
            4-3-3 <span className="shortcut">F4</span>
          </div>
          <div
            className="formation-item"
            onClick={handleFormationSelection}
          >
            4-4-2 <span className="shortcut">F5</span>
          </div>
          <div
            className="formation-item"
            onClick={handleFormationSelection}
          >
            4-5-1 <span className="shortcut">F6</span>
          </div>
          <div
            className="formation-item"
            onClick={handleFormationSelection}
          >
            5-2-3 <span className="shortcut">F7</span>
          </div>
          <div
            className="formation-item"
            onClick={handleFormationSelection}
          >
            5-3-2 <span className="shortcut">F8</span>
          </div>
          <div
            className="formation-item"
            onClick={handleFormationSelection}
          >
            5-4-1 <span className="shortcut">F9</span>
          </div>
          <div
            className="formation-item"
            onClick={handleFormationSelection}
          >
            5-5-0 <span className="shortcut">F10</span>
          </div>
          <div className="formation-item disabled">
            6-3-1 <span className="shortcut">F11</span>
          </div>
          <div className="formation-item disabled">
            6-4-0 <span className="shortcut">F12</span>
          </div>
          <div className="formation-separator"></div>
          <div
            className="formation-item"
            onClick={handleFormationSelection}
          >
            3-4-3
          </div>
          <div className="formation-separator"></div>
          <div className="formation-item">Automático A</div>
          <div className="formation-item">Melhores M</div>
        </div>
      )}

      {/* Barra Azul com Nome do Time */}
      <div className="team-view-team-bar">
        {teamName}
      </div>

      {/* Área Principal */}
      <div className="team-view-main">
        {/* Painel Esquerdo */}
        <div className="team-view-left-panel">
          {/* Informações do Jogador Selecionado */}
          <div className="team-view-player-info">
            <div className="team-view-info-row">
              <span className="team-view-info-label">Nome:</span>
              <span className="team-view-info-value">{selectedPlayer.name}</span>
            </div>
            <div className="team-view-info-row">
              <span className="team-view-info-label">País:</span>
              <span className="team-view-info-value">{country}</span>
            </div>
            <div className="team-view-info-row">
              <span className="team-view-info-label">Divisão:</span>
              <span className="team-view-info-value">{division}</span>
            </div>
          </div>

          {/* Tabela de Elenco */}
          <div className="team-view-squad-table">
            <div className="team-view-squad-header">
              <div className="team-view-squad-col-pos">Pos</div>
              <div className="team-view-squad-col-name">Nome</div>
              <div className="team-view-squad-col-skill">Hab</div>
              <div className="team-view-squad-col-salary">Salário</div>
            </div>
            <div className="team-view-squad-body">
              {bragantinoplayers.map((player) => (
                <div
                  key={player.id}
                  className={`team-view-squad-row ${selectedPlayer.id === player.id ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedPlayer(player);
                    togglePlayerSelection(player.id);
                  }}
                >
                  <div className="team-view-squad-col-pos">{player.position}</div>
                  <div className="team-view-squad-col-name">
                    {isFormationSelected && (
                      <span style={{ marginRight: '5px' }}>
                        {selectedPlayerIds.includes(player.id) ? '•' : '-'}
                      </span>
                    )}
                    {player.name}
                  </div>
                  <div className="team-view-squad-col-skill">{player.skill}</div>
                  <div className="team-view-squad-col-salary">${player.value.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Painel Direito */}
        <div className="team-view-right-panel">
          {/* Informações sempre visíveis */}
          <div className="team-view-right-content">
            {/* Ano */}
            <div className="team-view-year">2025</div>

            {/* Adversário */}
            <div className="team-view-section">
              <div className="team-view-section-title">Adversário</div>
              <div className="team-view-opponent-name">{opponent}</div>
              <div className="team-view-match-info">FORA 1ª Jornada</div>
            </div>

            {/* Placar */}
            <div className="team-view-scoreboard">
              <div className="team-view-score-row">
                <span className="team-view-team-name">{teamName}</span>
                <span className="team-view-score">0</span>
                <span className="team-view-score">0</span>
                <span className="team-view-score">0</span>
                <span className="team-view-score-separator">0 : 0</span>
                <span className="team-view-score">0</span>
              </div>
              <div className="team-view-score-row opponent">
                <span className="team-view-team-name">{opponent}</span>
                <span className="team-view-score">0</span>
                <span className="team-view-score">0</span>
                <span className="team-view-score">0</span>
                <span className="team-view-score-separator">0 : 0</span>
                <span className="team-view-score">0</span>
              </div>
            </div>

            {/* Árbitro, Dinheiro e Moral - apenas no menu Jogo */}
            {activeMenu === 'jogo' && (
              <>
                {/* Árbitro */}
                <div className="team-view-section">
                  <div className="team-view-section-title">Árbitro</div>
                  <div className="team-view-referee-name">{referee}</div>
                </div>

                {/* Dinheiro em Caixa */}
                <div className="team-view-section">
                  <div className="team-view-section-title">Dinheiro em caixa</div>
                  <div className="team-view-cash-amount">
                    {cashInBank.toLocaleString()} reais
                  </div>
                </div>

                {/* Moral */}
                <div className="team-view-section">
                  <div className="team-view-section-title">Moral</div>
                  <div className="team-view-morale-bar-container">
                    <div
                      className="team-view-morale-bar-fill"
                      style={{ width: `${morale}%` }}
                    />
                  </div>
                </div>
              </>
            )}

            {/* Painel Financeiro - apenas no menu Finanças */}
            {activeMenu === 'financas' && (
              <div className="team-view-finances">
                {/* Época */}
                <div className="finance-header">
                  <span className="finance-label">Época</span>
                  <span className="finance-year">2025</span>
                </div>

                {/* Receitas */}
                <div className="finance-section-title">Receitas</div>
                <div className="finance-row">
                  <span className="finance-label">Bilhetes</span>
                  <span className="finance-value">{finances.receitas.bilhetes}</span>
                </div>
                <div className="finance-row">
                  <span className="finance-label">Jogadores vendidos</span>
                  <span className="finance-value">{finances.receitas.jogadoresVendidos}</span>
                </div>
                <div className="finance-row">
                  <span className="finance-label">Prémios</span>
                  <span className="finance-value">{finances.receitas.premios}</span>
                </div>

                {/* Despesas */}
                <div className="finance-section-title">Despesas</div>
                <div className="finance-row">
                  <span className="finance-label">Salários</span>
                  <span className="finance-value">{finances.despesas.salarios}</span>
                </div>
                <div className="finance-row">
                  <span className="finance-label">Jogadores comprados</span>
                  <span className="finance-value">{finances.despesas.jogadoresComprados}</span>
                </div>
                <div className="finance-row">
                  <span className="finance-label">Bancadas</span>
                  <span className="finance-value">{finances.despesas.bancadas}</span>
                </div>
                <div className="finance-row">
                  <span className="finance-label">Juros</span>
                  <span className="finance-value">{finances.despesas.juros}</span>
                </div>

                {/* Totais */}
                <div className="finance-row finance-spacer">
                  <span className="finance-label">Total de receitas</span>
                  <span className="finance-value">{finances.totalReceitas}</span>
                </div>
                <div className="finance-row">
                  <span className="finance-label">Total de despesas</span>
                  <span className="finance-value">{finances.totalDespesas}</span>
                </div>
                <div className="finance-row">
                  <span className="finance-label">Saldo</span>
                  <span className="finance-value">{finances.saldo}</span>
                </div>

                {/* Informações Adicionais */}
                <div className="finance-row finance-spacer">
                  <span className="finance-label">Total de salários</span>
                  <span className="finance-value finance-highlight">{finances.totalSalarios.toLocaleString()}</span>
                </div>
                <div className="finance-row">
                  <span className="finance-label">Juros do empréstimo</span>
                  <span className="finance-value finance-highlight">{finances.jurosEmprestimo}</span>
                </div>

                {/* Dinheiro em Caixa */}
                <div className="finance-row finance-spacer">
                  <span className="finance-label">Dinheiro em caixa</span>
                  <span className="finance-value finance-highlight">{cashInBank.toLocaleString()}</span>
                </div>
              </div>
            )}

            {/* Painel do Jogador - apenas no menu Jogador */}
            {activeMenu === 'jogador' && (
              <div className="team-view-player-panel">
                {!showRenewContract ? (
                  <>
                    {/* Nome do Jogador */}
                    <div className="player-panel-name">{selectedPlayer.name}</div>

                    {/* Bandeira e País */}
                    <div className="player-panel-country">
                      <span className="player-panel-flag">🇧🇷</span>
                      <span className="player-panel-country-name">Brasil</span>
                    </div>

                    {/* Comportamento */}
                    <div className="player-panel-row">
                      <span className="player-panel-label">Comportamento</span>
                      <span className="player-panel-value">Fair play</span>
                    </div>

                    {/* Golos esta época */}
                    <div className="player-panel-row">
                      <span className="player-panel-label">Golos esta época</span>
                      <span className="player-panel-value">0</span>
                    </div>

                    {/* Historial */}
                    <div className="player-panel-history">
                      <div className="player-panel-history-title">Historial</div>
                      <div className="player-panel-history-row">
                        <span className="player-panel-history-label">Jogos</span>
                        <span className="player-panel-history-value">0</span>
                      </div>
                      <div className="player-panel-history-row">
                        <span className="player-panel-history-label">Golos</span>
                        <span className="player-panel-history-value">0</span>
                      </div>
                      <div className="player-panel-history-row">
                        <span className="player-panel-history-label">Cartões vermelhos</span>
                        <span className="player-panel-history-value">0</span>
                      </div>
                      <div className="player-panel-history-row">
                        <span className="player-panel-history-label">Lesões</span>
                        <span className="player-panel-history-value">0</span>
                      </div>
                    </div>

                    {/* Botão Renovar Contrato */}
                    <button
                      className="player-panel-renew-button"
                      onClick={() => setShowRenewContract(true)}
                    >
                      Renovar contrato...
                    </button>
                  </>
                ) : (
                  /* Modal de Renovação de Contrato */
                  <div className="renew-contract-modal">
                    <div className="renew-contract-title">Renovar contrato</div>
                    
                    <div className="renew-contract-input-group">
                      <label className="renew-contract-label">Novo salário:</label>
                      <input
                        type="number"
                        className="renew-contract-input"
                        value={newSalary}
                        onChange={(e) => setNewSalary(Number(e.target.value))}
                        step="100"
                      />
                    </div>

                    <div className="renew-contract-buttons">
                      <button
                        className="renew-contract-button renew-contract-confirm"
                        onClick={() => {
                          setShowRenewContract(false);
                          // Aqui seria a lógica de renovação
                        }}
                      >
                        <span className="renew-button-icon">✓</span>
                        <span>Propôr</span>
                      </button>
                      <button
                        className="renew-contract-button renew-contract-cancel"
                        onClick={() => setShowRenewContract(false)}
                      >
                        <span className="renew-button-icon">✗</span>
                        <span>Cancelar</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Botão Jogar - apenas no menu Selecção */}
            {activeMenu === 'selecao' && (
              <div className="team-view-play-button-wrapper">
                <button
                  className="team-view-play-button"
                  disabled={selectedPlayerIds.length !== 11}
                  onClick={onPlayMatch}
                >
                  <span className="team-view-play-icon">✓</span>
                  <span>Jogar</span>
                </button>
              </div>
            )}
          </div>

          {/* Menu Inferior */}
          <div className="team-view-bottom-menu">
            <button
              className={`team-view-bottom-menu-item ${activeMenu === 'jogo' ? 'active' : ''}`}
              onClick={() => setActiveMenu('jogo')}
            >
              Jogo
            </button>
            <button
              className={`team-view-bottom-menu-item ${activeMenu === 'jogador' ? 'active' : ''}`}
              onClick={() => setActiveMenu('jogador')}
            >
              Jogador
            </button>
            <button
              className={`team-view-bottom-menu-item ${activeMenu === 'financas' ? 'active' : ''}`}
              onClick={() => setActiveMenu('financas')}
            >
              Finanças
            </button>
            <button
              className={`team-view-bottom-menu-item ${activeMenu === 'selecao' ? 'active' : ''}`}
              onClick={() => setActiveMenu('selecao')}
            >
              Selecção
            </button>
            <button
              className={`team-view-bottom-menu-item ${activeMenu === 'adversario' ? 'active' : ''}`}
              onClick={() => setActiveMenu('adversario')}
            >
              Adversário
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamView;