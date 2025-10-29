import React, { useState } from 'react'
import { TopBar } from '../../components/layout'
import AboutModal from './components/AboutModal'
import MainMenuModal from './components/MainMenuModal'
import CountrySelectionModal from './components/CountrySelectionModal'
import CurrencySelectionModal from './components/CurrencySelectionModal'
import PlayerDrawModal from './components/PlayerDrawModal'
import type { Team } from '../../data/teams'

interface HomeProps {
  onGameStart: (players: Array<{ name: string; team: Team }>, selectedCountryIds: number[], currency: string) => void;
}

const Home: React.FC<HomeProps> = ({ onGameStart }) => {
  const [showAbout, setShowAbout] = useState(true)
  const [showMainMenu, setShowMainMenu] = useState(false)
  const [showCountrySelection, setShowCountrySelection] = useState(false)
  const [showCurrencySelection, setShowCurrencySelection] = useState(false)
  const [showPlayerDraw, setShowPlayerDraw] = useState(false)
  
  // Armazenar dados selecionados
  const [selectedCountryIds, setSelectedCountryIds] = useState<number[]>([])
  const [selectedCurrency, setSelectedCurrency] = useState<string>('')

  const handleCloseAbout = () => {
    setShowAbout(false)
    setShowMainMenu(true)
  }

  const handleCloseMainMenu = () => {
    setShowMainMenu(false)
    setShowAbout(true)
  }

  const handleStartNewGame = () => {
    setShowMainMenu(false)
    setShowCountrySelection(true)
  }

  const handleCloseCountrySelection = () => {
    setShowCountrySelection(false)
    setShowMainMenu(true)
  }

  const handleCountrySelectionComplete = (countryIds: number[]) => {
    console.log('Países selecionados (IDs):', countryIds)
    setSelectedCountryIds(countryIds)
    setShowCountrySelection(false)
    setShowCurrencySelection(true)
  }

  const handleCloseCurrencySelection = () => {
    setShowCurrencySelection(false)
    setShowCountrySelection(true)
  }

  const handleCurrencySelectionComplete = (currency: string) => {
    console.log('Moeda selecionada:', currency)
    setSelectedCurrency(currency)
    setShowCurrencySelection(false)
    setShowPlayerDraw(true)
  }

  const handleClosePlayerDraw = () => {
    setShowPlayerDraw(false)
    setShowCurrencySelection(true)
  }

  const handlePlayerDrawComplete = (players: Array<{ name: string; team: Team }>) => {
    console.log('Jogadores configurados:', players)
    onGameStart(players, selectedCountryIds, selectedCurrency)
  }

  return (
    <div className="home-container">
      {/* Barra superior */}
      <TopBar />

      {/* Conteúdo principal */}
      <div className="home-content">
        <div className="text-center">
          <h1 className="elifoot-title">
            ELIFOOT 98
          </h1>
          <p className="text-xl mt-4">
            Remake em desenvolvimento...
          </p>
        </div>
      </div>

      {/* Modal Acerca */}
      {showAbout && (
        <AboutModal onClose={handleCloseAbout} />
      )}

      {/* Modal Menu Principal */}
      {showMainMenu && (
        <MainMenuModal
          onClose={handleCloseMainMenu}
          onStartNewGame={handleStartNewGame}
        />
      )}

      {/* Modal Seleção de Países */}
      {showCountrySelection && (
        <CountrySelectionModal
          onClose={handleCloseCountrySelection}
          onComplete={handleCountrySelectionComplete}
        />
      )}

      {/* Modal Seleção de Moeda */}
      {showCurrencySelection && (
        <CurrencySelectionModal
          onClose={handleCloseCurrencySelection}
          onComplete={handleCurrencySelectionComplete}
        />
      )}

      {/* Modal Sorteio de Jogadores */}
      {showPlayerDraw && (
        <PlayerDrawModal
          onClose={handleClosePlayerDraw}
          onComplete={handlePlayerDrawComplete}
          selectedCountryIds={selectedCountryIds}
        />
      )}
    </div>
  )
}

export default Home
