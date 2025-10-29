import React from 'react';

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  disabled = false,
}) => {
  return (
    <div className="radio-button-container">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        disabled={disabled}
        className="radio-button-input"
      />
      <label htmlFor={id} className="radio-button-label">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;