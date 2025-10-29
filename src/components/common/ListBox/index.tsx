import React from 'react';

interface ListBoxProps {
  items: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  className?: string;
  height?: string;
}

const ListBox: React.FC<ListBoxProps> = ({
  items,
  selectedIndex,
  onSelect,
  className = '',
  height = '300px',
}) => {
  return (
    <div className={`win95-listbox ${className}`} style={{ height }}>
      {items.length === 0 ? (
        <div className="listbox-empty">Nenhum jogo salvo</div>
      ) : (
        items.map((item, index) => (
          <div
            key={index}
            className={`listbox-item ${index === selectedIndex ? 'selected' : ''}`}
            onClick={() => onSelect(index)}
          >
            {item}
          </div>
        ))
      )}
    </div>
  );
};

export default ListBox;