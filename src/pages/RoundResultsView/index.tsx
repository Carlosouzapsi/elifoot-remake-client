import React from 'react';
import PieChartLoader from '../../components/common/PieChartLoader';

interface RoundResultsViewProps {
  onViewTable: () => void;
}

const RoundResultsView: React.FC<RoundResultsViewProps> = ({ onViewTable }) => {
  // Dados mockados para simular os resultados da rodada
  const divisions = [
    {
      name: '1ª Divisão',
      matches: [
        { home: 'CORINTHIANS', away: 'BOTAFOGO', score: '0 - 0', events: [] },
        { home: 'SÃO PAULO', away: 'FLAMENGO', score: '0 - 0', events: [] },
        { home: 'PALMEIRAS', away: 'VASCO DA GAMA', score: '0 - 0', events: [] },
        { home: 'LUSA', away: 'SANTOS', score: '0 - 0', events: [] },
      ],
    },
    {
      name: '2ª Divisão',
      matches: [
        { home: 'ATLETICO MG', away: 'CORITIBA', score: '0 - 0', events: [] },
        { home: 'INTERNACIONAL', away: 'JUVENTUDE', score: '0 - 0', events: [] },
        { home: 'PARANA', away: 'PONTE PRETA', score: '0 - 0', events: [] },
        { home: 'GREMIO', away: 'FLUMINENSE', score: '1 - 0', events: ["Marcos Paulo 7' (pen.)"] },
      ],
    },
    {
      name: '3ª Divisão',
      matches: [
        { home: 'BRUSQUE', away: 'CRUZEIRO', score: '0 - 0', events: [] },
        { home: 'AVAÍ', away: 'SPORT', score: '0 - 0', events: [] },
        { home: 'BLUMENAU', away: 'GOIAS', score: '0 - 0', events: ["Jeferson 6'"] },
        { home: 'FIGUEIRENSE', away: 'CEARÁ', score: '0 - 0', events: [] },
      ],
    },
    {
      name: '4ª Divisão',
      matches: [
        { home: 'TUBARÃO', away: 'BRAGANTINO', score: '0 - 0', events: [] },
        { home: 'GUARANI', away: 'ATLETICO PR', score: '0 - 0', events: [] },
        { home: 'VITORIA', away: 'JUVENTUS-BR', score: '0 - 1', events: ["Marcello 7'"] },
        { home: 'CRICIUMA', away: 'BAHIA', score: '0 - 0', events: [] },
      ],
    },
  ];

  const getTeamStyle = (teamName: string): React.CSSProperties => {
    const styles: { [key: string]: React.CSSProperties } = {
      'CORINTHIANS': { backgroundColor: 'white', color: 'black' },
      'SÃO PAULO': { backgroundColor: 'red', color: 'white' },
      'PALMEIRAS': { backgroundColor: '#006400', color: 'white' },
      'LUSA': { backgroundColor: '#90EE90', color: 'black' },
      'BOTAFOGO': { backgroundColor: 'black', color: 'white' },
      'FLAMENGO': { backgroundColor: 'red', color: 'black' },
      'VASCO DA GAMA': { backgroundColor: 'white', color: 'black', border: '1px solid black' },
      'SANTOS': { backgroundColor: 'black', color: 'white' },
      'ATLETICO MG': { backgroundColor: 'black', color: 'white' },
      'INTERNACIONAL': { backgroundColor: 'red', color: 'white' },
      'PARANA': { backgroundColor: 'red', color: 'white' },
      'GREMIO': { backgroundColor: 'blue', color: 'white' },
      'CORITIBA': { border: '1px solid white' },
      'JUVENTUDE': { backgroundColor: '#006400', color: 'white' },
      'PONTE PRETA': { backgroundColor: 'black', color: 'white' },
      'FLUMINENSE': { backgroundColor: 'red', color: 'white' },
      'BRUSQUE': { backgroundColor: '#8B0000', color: 'white' },
      'AVAÍ': { backgroundColor: 'blue', color: 'white' },
      'BLUMENAU': { border: '1px solid white' },
      'FIGUEIRENSE': { backgroundColor: 'black', color: 'white' },
      'CRUZEIRO': { backgroundColor: 'blue', color: 'white' },
      'SPORT': { backgroundColor: 'black', color: 'white' },
      'GOIAS': { border: '1px solid white' },
      'CEARÁ': { backgroundColor: 'black', color: 'white' },
      'TUBARÃO': { backgroundColor: 'blue', color: 'white' },
      'GUARANI': { backgroundColor: 'black', color: 'white' },
      'VITORIA': { backgroundColor: 'red', color: 'white' },
      'CRICIUMA': { backgroundColor: 'yellow', color: 'black' },
      'BRAGANTINO': { backgroundColor: 'black', color: 'white' },
      'ATLETICO PR': { backgroundColor: 'red', color: 'black' },
      'JUVENTUS-BR': { backgroundColor: '#800000', color: 'white' },
      'BAHIA': { backgroundColor: 'blue', color: 'white' },
    };
    return styles[teamName] || {};
  };

  return (
    <div style={{ backgroundColor: '#005000', color: '#FFFF00', minHeight: '100vh', padding: '20px', fontFamily: "'VT323', monospace" }}>
      <div style={{ backgroundColor: '#000080', height: '20px', marginBottom: '10px' }}></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ width: '60px' }}></div>
        <div style={{ textAlign: 'center', fontSize: '24px' }}>
          1ª Jornada - 2025
        </div>
        <PieChartLoader onMatchComplete={onViewTable} />
      </div>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {divisions.map((division, index) => (
          <div key={index} style={{ border: '2px solid #000080', padding: '10px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#FFFF00' }}>
              {division.name}
            </h2>
            <div>
              {division.matches.map((match, matchIndex) => (
                <div key={matchIndex} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', fontSize: '16px' }}>
                  <div style={{ width: '50px', color: '#9E9E9E' }}>{56789 - (index * 10000) - (matchIndex * 1000)}</div>
                  <div style={{ flex: 1, textAlign: 'center', padding: '2px', ...getTeamStyle(match.home) }}>{match.home}</div>
                  <div style={{ width: '80px', textAlign: 'center', fontWeight: 'bold' }}>{match.score}</div>
                  <div style={{ flex: 1, textAlign: 'center', padding: '2px', ...getTeamStyle(match.away) }}>{match.away}</div>
                  <div style={{ width: '200px', textAlign: 'left', paddingLeft: '20px', fontSize: '14px', color: '#FFFF00' }}>
                    {match.events.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoundResultsView;