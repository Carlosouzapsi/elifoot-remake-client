import React from 'react'
import { Win95Window, Win95Button } from '../../../../components/common'

interface AboutModalProps {
  onClose: () => void
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Modal */}
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <Win95Window
          title="Acerca"
          onClose={onClose}
        >
          <div className="modal-content">
            {/* Conteúdo principal */}
            <div className="modal-main">
              {/* Título */}
              <div className="text-center mb-6">
                <h1 className="elifoot-title elifoot-title-small">Elifoot 98</h1>
                <p className="elifoot-text-green text-sm mt-2">
                  por André Elias e Ricardo Correia
                </p>
                <p className="elifoot-text-green text-xs mt-1">
                  (c) 1998 Todos os direitos reservados
                </p>
              </div>

              {/* Texto de copyright */}
              <p className="text-sm text-black text-center">
                Autorizada apenas a distribuição livre e gratuita. 
                A comercialização ou distribuição comercial, sob qualquer forma, 
                é proibida sem autorização escrita dos autores
              </p>

              {/* Informações de contato */}
              <div className="contact-grid">
                <div>
                  <p className="font-bold">Internet e-mail:</p>
                  <p>elias@ip.pt</p>
                </div>
                <div>
                  <p className="font-bold">Contacto telefónico (rede móvel):</p>
                  <p>De Portugal: 0936 - 279 16 33</p>
                  <p>Outros países: +351 - 936 - 279 16 33</p>
                </div>
                <div>
                  <p className="font-bold">World Wide Web:</p>
                  <p className="break-all">http://www.ip.pt/~ip213368</p>
                </div>
                <div>
                  <p className="font-bold">Morada Postal:</p>
                  <p>Apartado 9011</p>
                  <p>1901 Lisboa</p>
                  <p>PORTUGAL</p>
                </div>
              </div>

              <p className="elifoot-text-green text-xs text-center mt-4">
                Colaboração e agradecimentos: André Elias
              </p>
            </div>

            {/* Botões laterais */}
            <div className="modal-buttons">
              <Win95Button
                onClick={onClose}
                icon={<span className="text-green">✓</span>}
              >
                OK
              </Win95Button>
              <Win95Button
                icon={<span>📄</span>}
              >
                Registar
              </Win95Button>
            </div>
          </div>
        </Win95Window>
      </div>
    </div>
  )
}

export default AboutModal
