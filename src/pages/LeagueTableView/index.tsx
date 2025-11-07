import React from 'react';

const LeagueTableView: React.FC = () => {
  // Dados mockados para a tabela de classificação
  const divisions = {
    '1ª Divisão': [
      { name: 'CORINTHIANS', p: 1, w: 0, d: 0, l: 0, gf: 2, ga: 1, pts: 3 },
      { name: 'FLAMENGO', p: 1, w: 0, d: 0, l: 0, gf: 2, ga: 1, pts: 3 },
      { name: 'PALMEIRAS', p: 1, w: 0, d: 0, l: 0, gf: 2, ga: 1, pts: 3 },
      { name: 'SANTOS', p: 1, w: 0, d: 0, l: 0, gf: 1, ga: 0, pts: 3 },
      { name: 'BOTAFOGO', p: 0, w: 0, d: 1, l: 1, gf: 1, ga: 2, pts: 0 },
      { name: 'SÃO PAULO', p: 0, w: 0, d: 1, l: 1, gf: 1, ga: 2, pts: 0 },
      { name: 'VASCO DA GAMA', p: 0, w: 0, d: 1, l: 1, gf: 1, ga: 2, pts: 0 },
      { name: 'LUSA', p: 0, w: 0, d: 1, l: 1, gf: 0, ga: 1, pts: 0 },
    ],
    '2ª Divisão': [
        { name: 'INTERNACIONAL', p: 1, w: 0, d: 0, l: 0, gf: 2, ga: 1, pts: 3 },
        { name: 'GREMIO', p: 0, w: 1, d: 0, l: 0, gf: 2, ga: 2, pts: 1 },
        { name: 'FLUMINENSE', p: 0, w: 1, d: 0, l: 0, gf: 2, ga: 2, pts: 1 },
        { name: 'ATLETICO MG', p: 0, w: 1, d: 0, l: 0, gf: 1, ga: 1, pts: 1 },
        { name: 'CORITIBA', p: 0, w: 1, d: 0, l: 0, gf: 1, ga: 1, pts: 1 },
        { name: 'PARANA', p: 0, w: 1, d: 0, l: 0, gf: 1, ga: 1, pts: 1 },
        { name: 'PONTE PRETA', p: 0, w: 1, d: 0, l: 0, gf: 1, ga: 1, pts: 1 },
        { name: 'JUVENTUDE', p: 0, w: 0, d: 1, l: 1, gf: 1, ga: 2, pts: 0 },
    ],
    '3ª Divisão': [
        { name: 'BLUMENAU', p: 1, w: 0, d: 0, l: 0, gf: 3, ga: 1, pts: 3 },
        { name: 'BRUSQUE', p: 1, w: 0, d: 0, l: 0, gf: 1, ga: 0, pts: 3 },
        { name: 'AVAÍ', p: 0, w: 1, d: 0, l: 0, gf: 2, ga: 2, pts: 1 },
        { name: 'SPORT', p: 0, w: 1, d: 0, l: 0, gf: 2, ga: 2, pts: 1 },
        { name: 'FIGUEIRENSE', p: 0, w: 1, d: 0, l: 0, gf: 1, ga: 1, pts: 1 },
        { name: 'CEARÁ', p: 0, w: 1, d: 0, l: 0, gf: 1, ga: 1, pts: 1 },
        { name: 'CRUZEIRO', p: 0, w: 0, d: 1, l: 1, gf: 0, ga: 1, pts: 0 },
        { name: 'GOIAS', p: 0, w: 0, d: 1, l: 1, gf: 1, ga: 3, pts: 0 },
    ],
    '4ª Divisão': [
        { name: 'TUBARÃO', p: 1, w: 0, d: 0, l: 0, gf: 3, ga: 1, pts: 3 },
        { name: 'ATLETICO PR', p: 1, w: 0, d: 0, l: 0, gf: 2, ga: 0, pts: 3 },
        { name: 'JUVENTUS-BR', p: 1, w: 0, d: 0, l: 0, gf: 1, ga: 0, pts: 3 },
        { name: 'CRICIUMA', p: 1, w: 0, d: 0, l: 0, gf: 1, ga: 0, pts: 3 },
        { name: 'VITORIA', p: 0, w: 0, d: 1, l: 1, gf: 0, ga: 1, pts: 0 },
        { name: 'BAHIA', p: 0, w: 0, d: 1, l: 1, gf: 0, ga: 1, pts: 0 },
        { name: 'BRAGANTINO', p: 0, w: 0, d: 1, l: 1, gf: 1, ga: 3, pts: 0 },
        { name: 'GUARANI', p: 0, w: 0, d: 1, l: 1, gf: 0, ga: 2, pts: 0 },
    ],
  };

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
        'CORITIBA': { border: '1px solid white', color: 'black' },
        'JUVENTUDE': { backgroundColor: '#006400', color: 'white' },
        'PONTE PRETA': { backgroundColor: 'black', color: 'white' },
        'FLUMINENSE': { backgroundColor: 'red', color: 'white' },
        'BRUSQUE': { backgroundColor: '#8B0000', color: 'white' },
        'AVAÍ': { backgroundColor: 'blue', color: 'white' },
        'BLUMENAU': { border: '1px solid white', color: 'black' },
        'FIGUEIRENSE': { backgroundColor: 'black', color: 'white' },
        'CRUZEIRO': { backgroundColor: 'blue', color: 'white' },
        'SPORT': { backgroundColor: 'black', color: 'white' },
        'GOIAS': { border: '1px solid white', color: 'black' },
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
    return styles[teamName] || { color: 'black' };
  };

  return (
    <div style={{ backgroundColor: '#008000', color: 'yellow', minHeight: '100vh', padding: '20px', fontFamily: "'VT323', monospace" }}>
      <div style={{ backgroundColor: '#000080', color: 'white', padding: '5px 10px', marginBottom: '20px', textAlign: 'center', fontSize: '20px' }}>
        Classificação - 1ª Jornada
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {Object.entries(divisions).map(([divisionName, teams]) => (
          <div key={divisionName}>
            <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>{divisionName}</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                {teams.map((team, index) => (
                  <tr key={index} style={getTeamStyle(team.name)}>
                    <td style={{ padding: '2px 5px' }}>{team.name}</td>
                    <td style={{ padding: '2px 5px', textAlign: 'right' }}>{team.p}</td>
                    <td style={{ padding: '2px 5px', textAlign: 'right' }}>{team.w}</td>
                    <td style={{ padding: '2px 5px', textAlign: 'right' }}>{team.d}</td>
                    <td style={{ padding: '2px 5px', textAlign: 'right' }}>{`${team.gf}:${team.ga}`}</td>
                    <td style={{ padding: '2px 5px', textAlign: 'right', fontWeight: 'bold' }}>{team.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeagueTableView;