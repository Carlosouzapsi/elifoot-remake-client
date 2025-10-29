import React from 'react';

interface Win95ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  icon?: React.ReactNode
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const Win95Button: React.FC<Win95ButtonProps> = ({
  children,
  onClick,
  icon,
  disabled = false,
  className = '',
  type = 'button'
}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`win95-button ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  )
}

export default Win95Button