export interface Team {
  id: number;
  name: string;
  country: string;
  countryId: number;
}

// Mock de equipes por país (algumas equipes de exemplo)
export const teamsByCountry: Record<number, Team[]> = {
  1: [ // Portugal
    { id: 1, name: 'BENFICA', country: 'Portugal', countryId: 1 },
    { id: 2, name: 'PORTO', country: 'Portugal', countryId: 1 },
    { id: 3, name: 'SPORTING', country: 'Portugal', countryId: 1 },
    { id: 4, name: 'BOAVISTA', country: 'Portugal', countryId: 1 },
    { id: 5, name: 'BRAGA', country: 'Portugal', countryId: 1 },
    { id: 6, name: 'VITÓRIA GUIMARÃES', country: 'Portugal', countryId: 1 },
    { id: 7, name: 'BELENENSES', country: 'Portugal', countryId: 1 },
    { id: 8, name: 'MARÍTIMO', country: 'Portugal', countryId: 1 },
  ],
  2: [ // Espanha
    { id: 9, name: 'REAL MADRID', country: 'Espanha', countryId: 2 },
    { id: 10, name: 'BARCELONA', country: 'Espanha', countryId: 2 },
    { id: 11, name: 'ATLÉTICO MADRID', country: 'Espanha', countryId: 2 },
    { id: 12, name: 'VALENCIA', country: 'Espanha', countryId: 2 },
    { id: 13, name: 'SEVILLA', country: 'Espanha', countryId: 2 },
    { id: 14, name: 'ATHLETIC BILBAO', country: 'Espanha', countryId: 2 },
    { id: 15, name: 'REAL SOCIEDAD', country: 'Espanha', countryId: 2 },
    { id: 16, name: 'DEPORTIVO', country: 'Espanha', countryId: 2 },
  ],
  3: [ // Itália
    { id: 17, name: 'JUVENTUS', country: 'Itália', countryId: 3 },
    { id: 18, name: 'MILAN', country: 'Itália', countryId: 3 },
    { id: 19, name: 'INTER', country: 'Itália', countryId: 3 },
    { id: 20, name: 'ROMA', country: 'Itália', countryId: 3 },
    { id: 21, name: 'LAZIO', country: 'Itália', countryId: 3 },
    { id: 22, name: 'NAPOLI', country: 'Itália', countryId: 3 },
    { id: 23, name: 'FIORENTINA', country: 'Itália', countryId: 3 },
    { id: 24, name: 'PARMA', country: 'Itália', countryId: 3 },
  ],
  6: [ // Brasil - 44 equipes
    { id: 25, name: 'FLAMENGO', country: 'Brasil', countryId: 6 },
    { id: 26, name: 'PALMEIRAS', country: 'Brasil', countryId: 6 },
    { id: 27, name: 'SÃO PAULO', country: 'Brasil', countryId: 6 },
    { id: 28, name: 'CORINTHIANS', country: 'Brasil', countryId: 6 },
    { id: 29, name: 'SANTOS', country: 'Brasil', countryId: 6 },
    { id: 30, name: 'VASCO', country: 'Brasil', countryId: 6 },
    { id: 31, name: 'CRUZEIRO', country: 'Brasil', countryId: 6 },
    { id: 32, name: 'GRÊMIO', country: 'Brasil', countryId: 6 },
    { id: 33, name: 'INTERNACIONAL', country: 'Brasil', countryId: 6 },
    { id: 34, name: 'ATLÉTICO MINEIRO', country: 'Brasil', countryId: 6 },
    { id: 35, name: 'BOTAFOGO', country: 'Brasil', countryId: 6 },
    { id: 36, name: 'FLUMINENSE', country: 'Brasil', countryId: 6 },
    { id: 37, name: 'ATHLETICO PARANAENSE', country: 'Brasil', countryId: 6 },
    { id: 38, name: 'BAHIA', country: 'Brasil', countryId: 6 },
    { id: 39, name: 'SPORT', country: 'Brasil', countryId: 6 },
    { id: 40, name: 'VITÓRIA', country: 'Brasil', countryId: 6 },
    { id: 41, name: 'CORITIBA', country: 'Brasil', countryId: 6 },
    { id: 42, name: 'GOIÁS', country: 'Brasil', countryId: 6 },
    { id: 43, name: 'FORTALEZA', country: 'Brasil', countryId: 6 },
    { id: 44, name: 'CEARÁ', country: 'Brasil', countryId: 6 },
    { id: 45, name: 'NÁUTICO', country: 'Brasil', countryId: 6 },
    { id: 46, name: 'SANTA CRUZ', country: 'Brasil', countryId: 6 },
    { id: 47, name: 'GUARANI', country: 'Brasil', countryId: 6 },
    { id: 48, name: 'PONTE PRETA', country: 'Brasil', countryId: 6 },
    { id: 49, name: 'PORTUGUESA', country: 'Brasil', countryId: 6 },
    { id: 50, name: 'JUVENTUDE', country: 'Brasil', countryId: 6 },
    { id: 51, name: 'BRAGANTINO', country: 'Brasil', countryId: 6 },
    { id: 52, name: 'AVAÍ', country: 'Brasil', countryId: 6 },
    { id: 53, name: 'FIGUEIRENSE', country: 'Brasil', countryId: 6 },
    { id: 54, name: 'CHAPECOENSE', country: 'Brasil', countryId: 6 },
    { id: 55, name: 'AMÉRICA MINEIRO', country: 'Brasil', countryId: 6 },
    { id: 56, name: 'ATLÉTICO GOIANIENSE', country: 'Brasil', countryId: 6 },
    { id: 57, name: 'CUIABÁ', country: 'Brasil', countryId: 6 },
    { id: 58, name: 'JUVENTUS', country: 'Brasil', countryId: 6 },
    { id: 59, name: 'BANGU', country: 'Brasil', countryId: 6 },
    { id: 60, name: 'AMÉRICA RJ', country: 'Brasil', countryId: 6 },
    { id: 61, name: 'PARANÁ', country: 'Brasil', countryId: 6 },
    { id: 62, name: 'PAYSANDU', country: 'Brasil', countryId: 6 },
    { id: 63, name: 'REMO', country: 'Brasil', countryId: 6 },
    { id: 64, name: 'CSA', country: 'Brasil', countryId: 6 },
    { id: 65, name: 'CRB', country: 'Brasil', countryId: 6 },
    { id: 66, name: 'SAMPAIO CORRÊA', country: 'Brasil', countryId: 6 },
    { id: 67, name: 'ABC', country: 'Brasil', countryId: 6 },
    { id: 68, name: 'LONDRINA', country: 'Brasil', countryId: 6 },
  ],
  5: [ // Argentina
    { id: 43, name: 'BOCA JUNIORS', country: 'Argentina', countryId: 5 },
    { id: 44, name: 'RIVER PLATE', country: 'Argentina', countryId: 5 },
    { id: 45, name: 'RACING', country: 'Argentina', countryId: 5 },
    { id: 46, name: 'INDEPENDIENTE', country: 'Argentina', countryId: 5 },
    { id: 47, name: 'SAN LORENZO', country: 'Argentina', countryId: 5 },
    { id: 48, name: 'VÉLEZ SARSFIELD', country: 'Argentina', countryId: 5 },
    { id: 49, name: 'ESTUDIANTES', country: 'Argentina', countryId: 5 },
    { id: 50, name: 'NEWELL\'S OLD BOYS', country: 'Argentina', countryId: 5 },
    { id: 51, name: 'ROSARIO CENTRAL', country: 'Argentina', countryId: 5 },
    { id: 52, name: 'LANÚS', country: 'Argentina', countryId: 5 },
  ],
};

// Função para obter todas as equipes dos países selecionados
export const getTeamsFromCountries = (countryIds: number[]): Team[] => {
  const teams: Team[] = [];
  countryIds.forEach(countryId => {
    const countryTeams = teamsByCountry[countryId] || [];
    teams.push(...countryTeams);
  });
  return teams;
};

// Função para sortear uma equipe aleatória de uma lista
export const drawRandomTeam = (teams: Team[]): Team | null => {
  if (teams.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * teams.length);
  return teams[randomIndex];
};

// Função para sortear equipes para jogadores (sem repetição)
export const drawTeamsForPlayers = (teams: Team[], playerCount: number): Team[] => {
  const availableTeams = [...teams];
  const drawnTeams: Team[] = [];
  
  for (let i = 0; i < playerCount && availableTeams.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * availableTeams.length);
    drawnTeams.push(availableTeams[randomIndex]);
    availableTeams.splice(randomIndex, 1);
  }
  
  return drawnTeams;
};