export interface Player {
  id: number;
  name: string;
  position: 'G' | 'D' | 'M' | 'A'; // Goleiro, Defesa, Meio, Ataque
  skill: number; // 1-10
  value: number; // Valor em moeda
  teamId: number;
}

// Mock de jogadores do Bragantino
export const bragantinoplayers: Player[] = [
  // Goleiros
  { id: 1, name: 'Alex', position: 'G', skill: 6, value: 3000, teamId: 51 },
  { id: 2, name: 'Ivan', position: 'G', skill: 3, value: 1500, teamId: 51 },
  { id: 3, name: 'Wendell', position: 'G', skill: 5, value: 2500, teamId: 51 },
  
  // Defensores
  { id: 4, name: 'Ayupe', position: 'D', skill: 4, value: 2000, teamId: 51 },
  { id: 5, name: 'Fábio', position: 'D', skill: 2, value: 1000, teamId: 51 },
  { id: 6, name: 'Nei', position: 'D', skill: 7, value: 3500, teamId: 51 },
  { id: 7, name: 'Pereira', position: 'D', skill: 4, value: 2000, teamId: 51 },
  
  // Meio-campistas
  { id: 8, name: 'Edson Baiano', position: 'M', skill: 7, value: 3500, teamId: 51 },
  { id: 9, name: 'Genilson', position: 'M', skill: 3, value: 1500, teamId: 51 },
  { id: 10, name: 'Geraldo', position: 'M', skill: 5, value: 2500, teamId: 51 },
  { id: 11, name: 'Norberto', position: 'M', skill: 6, value: 3000, teamId: 51 },
  { id: 12, name: 'Odair', position: 'M', skill: 8, value: 4000, teamId: 51 },
  
  // Atacantes
  { id: 13, name: 'Adalberto', position: 'A', skill: 7, value: 3500, teamId: 51 },
  { id: 14, name: 'Luciano', position: 'A', skill: 7, value: 3500, teamId: 51 },
  { id: 15, name: 'Paulinho', position: 'A', skill: 4, value: 2000, teamId: 51 },
  { id: 16, name: 'Sandro', position: 'A', skill: 8, value: 4000, teamId: 51 },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getPlayersByTeam = (teamId: number): Player[] => {
  // Por enquanto, retorna sempre os jogadores do Bragantino
  // TODO: Implementar jogadores para outros times
  return bragantinoplayers;
};

export const getPlayersByPosition = (players: Player[], position: Player['position']): Player[] => {
  return players.filter(p => p.position === position);
};