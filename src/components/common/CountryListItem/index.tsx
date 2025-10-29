import React from 'react';

interface CountryListItemProps {
  flag: string;
  name: string;
  teams: number;
  selected: boolean;
  onClick: () => void;
}

const CountryListItem: React.FC<CountryListItemProps> = ({
  flag,
  name,
  teams,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`country-list-item ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <span className="country-flag">{flag}</span>
      <span className="country-name">{name}</span>
      <span className="country-teams">
        {teams} {teams === 1 ? 'equipa' : 'equipas'}
      </span>
    </div>
  );
};

export default CountryListItem;