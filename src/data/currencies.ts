export interface Currency {
  value: string;
  label: string;
}

export const currencies: Currency[] = [
  { value: 'reais', label: 'Reais' },
  { value: 'pesetas', label: 'Pesetas' },
  { value: 'liras', label: 'Liras' },
  { value: 'marcos', label: 'Marcos' },
  { value: 'francos', label: 'Francos' },
  { value: 'libras', label: 'Libras' },
  { value: 'escudos', label: 'Escudos' },
  { value: 'dolares', label: 'Dólares' },
];

export const getDefaultCurrency = (): string => {
  return 'reais';
};