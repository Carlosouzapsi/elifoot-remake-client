import React, { useState, useEffect } from 'react';
import './styles.css';

interface PieChartLoaderProps {
  size?: number;
  onMatchComplete?: () => void;
}

type GamePhase = 'first-half' | 'half-time' | 'second-half' | 'finished';

const PieChartLoader: React.FC<PieChartLoaderProps> = ({ 
  size = 60, 
  onMatchComplete 
}) => {
  const [phase, setPhase] = useState<GamePhase>('first-half');
  const [progress, setProgress] = useState(0); // Progresso de 0 a 75 para cada tempo

  useEffect(() => {
    if (phase === 'finished' || phase === 'half-time') {
      return;
    }

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;

        if (newProgress >= 75) {
          clearInterval(timer);
          if (phase === 'first-half') {
            setPhase('half-time');
          } else if (phase === 'second-half') {
            setPhase('finished');
            if (onMatchComplete) {
              onMatchComplete();
            }
          }
          return 75;
        }
        return newProgress;
      });
    }, 40); // Velocidade da animação

    return () => clearInterval(timer);
  }, [phase, onMatchComplete]);

  // Lógica para o usuário continuar após o intervalo
  useEffect(() => {
    if (phase === 'half-time') {
      // Simula uma pausa e depois continua para o segundo tempo
      const halfTimeBreak = setTimeout(() => {
        setProgress(0); // Reinicia o progresso para o segundo tempo
        setPhase('second-half');
      }, 2000); // Pausa de 2 segundos no intervalo

      return () => clearTimeout(halfTimeBreak);
    }
  }, [phase]);

  const color = phase === 'first-half' ? '#0000CD' : '#FF0000'; // Azul ou Vermelho
  const angle = progress * (360 / 75); // Converte progresso (0-75) para ângulo (0-360)

  const style: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    background: `conic-gradient(${color} ${angle}deg, white 0deg)`,
  };

  return (
    <div className="pie-chart-loader-container">
      <div className="pie-chart-loader" style={style}></div>
    </div>
  );
};

export default PieChartLoader;