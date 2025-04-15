import React, { useState, CSSProperties } from 'react';

interface DotGridProps {
  className?: string;
  style?: CSSProperties;
}

export function DotGrid({ className = '', style }: DotGridProps) {
  const [hoverPosition, setHoverPosition] = useState({ row: 23, col: 23 });
  const mainGridSize = 21;
  const dotGridSize = 7;
  const dotSize = 40;
  const subcellSize = dotSize / 3;

  const handleCellHover = (row: number, col: number) => {
    const adjustedRow = (row - 1) * 2 + 2;
    const adjustedCol = (col - 1) * 2 + 2;
    setHoverPosition({ row: adjustedRow, col: adjustedCol });
  };

  const calculateDotScale = (dotRow: number, dotCol: number) => {
    const distance = Math.sqrt(
      Math.pow(dotRow - hoverPosition.row, 2) + 
      Math.pow(dotCol - hoverPosition.col, 2)
    );
    return Math.max(0.4, Math.min(1.5, 1.5 - distance * 0.04));
  };

  const calculateDotBorderRadius = (dotRow: number, dotCol: number) => {
    const distance = Math.sqrt(
      Math.pow(dotRow - hoverPosition.row, 2) + 
      Math.pow(dotCol - hoverPosition.col, 2)
    );
    return `${Math.max(0, Math.min(50, distance * 1.5))}%`;
  };

  return (
    <div className={`relative w-fit select-none ${className}`} style={style}>
      {/* Main interaction grid */}
      <div 
        className="grid"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${mainGridSize}, ${subcellSize}px)`,
          gridTemplateRows: `repeat(${mainGridSize}, ${subcellSize}px)`,
          position: 'relative',
          overflow: 'visible'
        }}
      >
        {Array.from({ length: mainGridSize * mainGridSize }).map((_, idx) => {
          const row = Math.floor(idx / mainGridSize) + 1;
          const col = (idx % mainGridSize) + 1;
          return (
            <div
              key={`cell-${row}-${col}`}
              className="w-full h-full"
              onMouseEnter={() => handleCellHover(row, col)}
            />
          );
        })}

        {/* Dot grid overlay */}
        <div
          className="pointer-events-none absolute top-0 left-0 z-10"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${dotGridSize}, ${dotSize}px)`,
            gridTemplateRows: `repeat(${dotGridSize}, ${dotSize}px)`,
            overflow: 'visible'
          }}
        >
          {Array.from({ length: dotGridSize * dotGridSize }).map((_, idx) => {
            const row = Math.floor(idx / dotGridSize) * 7 + 2;
            const col = (idx % dotGridSize) * 7 + 2;
            const isEven = (row + col) % 2 === 0;

            if (!isEven) return null;

            const distance = Math.sqrt(
              Math.pow(row - hoverPosition.row, 2) + 
              Math.pow(col - hoverPosition.col, 2)
            );

            return (
              <div
                key={`dot-${row}-${col}`}
                className="bg-neutral-900 rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${dotSize}px`,
                  height: `${dotSize}px`,
                  gridRow: Math.floor(idx / dotGridSize) + 1,
                  gridColumn: (idx % dotGridSize) + 1,
                  transform: `scale(${calculateDotScale(row, col)}) translateZ(0)`,
                  borderRadius: calculateDotBorderRadius(row, col),
                  opacity: 0.25,
                  zIndex: Math.max(0, 3 - Math.min(distance, 3)),
                  willChange: 'transform, border-radius'
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
} 