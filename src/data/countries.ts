export interface Country {
  id: number;
  name: string;
  flag: string;
  teams: number;
}

export const countries: Country[] = [
  { id: 1, name: 'África do Sul', flag: '🇿🇦', teams: 5 },
  { id: 2, name: 'Áustria', flag: '🇦🇹', teams: 5 },
  { id: 3, name: 'Alemanha', flag: '🇩🇪', teams: 7 },
  { id: 4, name: 'Argentina', flag: '🇦🇷', teams: 1 },
  { id: 5, name: 'Bélgica', flag: '🇧🇪', teams: 7 },
  { id: 6, name: 'Brasil', flag: '🇧🇷', teams: 44 },
  { id: 7, name: 'Bulgária', flag: '🇧🇬', teams: 1 },
  { id: 8, name: 'Croácia', flag: '🇭🇷', teams: 3 },
  { id: 9, name: 'Dinamarca', flag: '🇩🇰', teams: 1 },
  { id: 10, name: 'Egipto', flag: '🇪🇬', teams: 1 },
  { id: 11, name: 'Escócia', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', teams: 8 },
  { id: 12, name: 'Espanha', flag: '🇪🇸', teams: 20 },
  { id: 13, name: 'França', flag: '🇫🇷', teams: 21 },
  { id: 14, name: 'Grécia', flag: '🇬🇷', teams: 2 },
  { id: 15, name: 'Holanda', flag: '🇳🇱', teams: 18 },
  { id: 16, name: 'Hungria', flag: '🇭🇺', teams: 1 },
  { id: 17, name: 'Inglaterra', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', teams: 22 },
  { id: 18, name: 'Irlanda', flag: '🇮🇪', teams: 2 },
  { id: 19, name: 'Irlanda do Norte', flag: '🇬🇧', teams: 1 },
  { id: 20, name: 'Islândia', flag: '🇮🇸', teams: 1 },
  { id: 21, name: 'Israel', flag: '🇮🇱', teams: 1 },
  { id: 22, name: 'Itália', flag: '🇮🇹', teams: 18 },
  { id: 23, name: 'Japão', flag: '🇯🇵', teams: 10 },
  { id: 24, name: 'México', flag: '🇲🇽', teams: 1 },
  { id: 25, name: 'Noruega', flag: '🇳🇴', teams: 2 },
  { id: 26, name: 'País de Gales', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', teams: 2 },
  { id: 27, name: 'Polónia', flag: '🇵🇱', teams: 2 },
  { id: 28, name: 'Portugal', flag: '🇵🇹', teams: 18 },
  { id: 29, name: 'República Checa', flag: '🇨🇿', teams: 2 },
  { id: 30, name: 'Roménia', flag: '🇷🇴', teams: 1 },
  { id: 31, name: 'Rússia', flag: '🇷🇺', teams: 16 },
  { id: 32, name: 'Suécia', flag: '🇸🇪', teams: 2 },
  { id: 33, name: 'Suíça', flag: '🇨🇭', teams: 2 },
  { id: 34, name: 'Turquia', flag: '🇹🇷', teams: 3 },
  { id: 35, name: 'Ucrânia', flag: '🇺🇦', teams: 2 },
];

export const getTotalTeams = (): number => {
  return countries.reduce((sum, country) => sum + country.teams, 0);
};

export const getTotalCountries = (): number => {
  return countries.length;
};