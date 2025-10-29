import React from 'react';

interface TextInputProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  value,
  onChange,
  placeholder = '',
  maxLength,
  disabled = false,
  className = '',
}) => {
  return (
    <input
      type="text"
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      className={`win95-input ${className}`}
    />
  );
};

export default TextInput;