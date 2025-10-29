import React, { useState, useMemo } from 'react';
import { Win95Window, Win95Button } from '../../../../components/common';
import CountryListItem from '../../../../components/common/CountryListItem';
import { countries, getTotalTeams, getTotalCountries } from '../../../../data/countries';

interface CountrySelectionModalProps {
  onClose: () => void;
  onComplete: (selectedCountryIds: number[]) => void;
}

const CountrySelectionModal: React.FC<CountrySelectionModalProps> = ({ onClose, onComplete }) => {
  const [selectedCountries, setSelectedCountries] = useState<Set<number>>(new Set());

  // Calcular estatísticas
  const stats = useMemo(() => {
    const selectedTeams = countries
      .filter(c => selectedCountries.has(c.id))
      .reduce((sum, c) => sum + c.teams, 0);
    
    return {
      totalTeams: getTotalTeams(),
      selectedTeams,
      totalCountries: getTotalCountries(),
      selectedCountries: selectedCountries.size,
    };
  }, [selectedCountries]);

  const handleCountryClick = (countryId: number) => {
    setSelectedCountries(prev => {
      const newSet = new Set(prev);
      if (newSet.has(countryId)) {
        newSet.delete(countryId);
      } else {
        newSet.add(countryId);
      }
      return newSet;
    });
  };

  const handleSelectAll = () => {
    setSelectedCountries(new Set(countries.map(c => c.id)));
  };

  const handleOk = () => {
    if (stats.selectedTeams >= 34) {
      onComplete(Array.from(selectedCountries));
    } else {
      alert('Seleccione países com pelo menos 34 equipas!');
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      {/* Modal */}
      <div className="modal-container-large" onClick={(e) => e.stopPropagation()}>
        <Win95Window
          title="Selecção de Países"
          onClose={handleCancel}
        >
          <div className="country-selection-content">
            {/* Lista de países */}
            <div className="country-list-container">
              <div className="country-list">
                {countries.map(country => (
                  <CountryListItem
                    key={country.id}
                    flag={country.flag}
                    name={country.name}
                    teams={country.teams}
                    selected={selectedCountries.has(country.id)}
                    onClick={() => handleCountryClick(country.id)}
                  />
                ))}
              </div>
            </div>

            {/* Painel lateral */}
            <div className="country-selection-sidebar">
              {/* Botões */}
              <div className="country-selection-buttons">
                <Win95Button
                  onClick={handleSelectAll}
                  icon={<span>📋</span>}
                >
                  Todas
                </Win95Button>
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

              {/* Estatísticas */}
              <div className="country-stats">
                <div className="stat-row">
                  <span className="stat-label">Equipas existentes</span>
                  <span className="stat-value">{stats.totalTeams}</span>
                </div>
                <div className="stat-row highlight">
                  <span className="stat-label">Equipas seleccionadas</span>
                  <span className="stat-value">{stats.selectedTeams}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Países existentes</span>
                  <span className="stat-value">{stats.totalCountries}</span>
                </div>
                <div className="stat-row highlight">
                  <span className="stat-label">Países seleccionados</span>
                  <span className="stat-value">{stats.selectedCountries}</span>
                </div>
              </div>

              {/* Texto informativo */}
              <div className="country-info-text">
                <p>
                  Seleccione os países com que pretende jogar, de modo a totalizar pelo menos 34 equipas.
                </p>
              </div>
            </div>
          </div>
        </Win95Window>
      </div>
    </div>
  );
};

export default CountrySelectionModal;