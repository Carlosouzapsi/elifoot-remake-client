import React from 'react'

interface Win95WindowProps {
  title: string
  children: React.ReactNode
  onClose?: () => void
  showCloseButton?: boolean
  className?: string
}

const Win95Window: React.FC<Win95WindowProps> = ({
  title,
  children,
  onClose,
  showCloseButton = true,
  className = '',
}) => {
  return (
    <div className={`win95-window ${className}`}>
      {/* Barra de título */}
      <div className="win95-title-bar">
        <span>{title}</span>
        {showCloseButton && onClose && (
          <button onClick={onClose}>
            ✕
          </button>
        )}
      </div>
      
      {/* Conteúdo da janela */}
      <div className="win95-window-content">
        {children}
      </div>
    </div>
  )
}

export default Win95Window
