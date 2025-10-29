import React, { useState } from 'react';
import { Win95Window, Win95Button } from '../../../../components/common';
import Dropdown from '../../../../components/common/Dropdown';
import { currencies, getDefaultCurrency } from '../../../../data/currencies';

interface CurrencySelectionModalProps {
  onClose: () => void;
  onComplete: (currency: string) => void;
}

const CurrencySelectionModal: React.FC<CurrencySelectionModalProps> = ({ onClose, onComplete }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>(getDefaultCurrency());

  const handleOk = () => {
    onComplete(selectedCurrency);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleCancel}>
      {/* Modal */}
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <Win95Window
          title="Dinheiro"
          onClose={handleCancel}
        >
          <div className="currency-modal-content">
            {/* Área amarela com a pergunta e dropdown */}
            <div className="currency-question-section">
              <p className="currency-question">
                Com que moeda vai querer jogar?
              </p>
              
              <div className="currency-dropdown-container">
                <Dropdown
                  value={selectedCurrency}
                  onChange={setSelectedCurrency}
                  options={currencies}
                />
              </div>
            </div>

            {/* Botão OK */}
            <div className="currency-button-container">
              <Win95Button
                onClick={handleOk}
                icon={<span className="text-green">✓</span>}
              >
                OK
              </Win95Button>
            </div>
          </div>
        </Win95Window>
      </div>
    </div>
  );
};

export default CurrencySelectionModal;