import React, { useState, useEffect, useCallback } from 'react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = ''
}: ComparisonSliderProps) {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);

  const handleMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isResizing) return;

      const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const slider = document.getElementById('comparison-slider');
      if (!slider) return;

      const rect = slider.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = Math.max(0, Math.min((x / rect.width) * 100, 100));

      setPosition(percentage);
    },
    [isResizing]
  );

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isResizing, handleMove, handleMouseUp]);

  return (
    <div 
      id="comparison-slider"
      className={`relative select-none rounded-3xl overflow-hidden bg-white ${className}`}
    >
      {/* Before Image Container */}
      <div className="absolute inset-0 bg-neutral-900/10">
        <div className="relative w-full h-full">
          <img 
            src={beforeImage} 
            alt="Before" 
            className="w-full h-full object-contain grayscale"
          />
          <div className="absolute inset-0 bg-black/20" />
          {position < 95 && (
            <div className="absolute top-4 left-4 px-4 py-2 bg-red-500/90 backdrop-blur-sm rounded-lg text-sm font-medium">
              {beforeLabel}
            </div>
          )}
        </div>
      </div>

      {/* After Image Container */}
      <div 
        className="absolute inset-0 bg-white"
        style={{ 
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition: isResizing ? 'none' : 'clip-path 0.1s ease'
        }}
      >
        <div className="relative w-full h-full">
          <img 
            src={afterImage} 
            alt="After" 
            className="w-full h-full object-contain"
          />
          {position > 5 && (
            <div className="absolute top-4 right-4 px-4 py-2 bg-emerald-500/90 backdrop-blur-sm rounded-lg text-sm font-medium">
              {afterLabel}
            </div>
          )}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 left-0 w-1 bg-white cursor-ew-resize group-hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-shadow"
        style={{ 
          left: `${position}%`,
          transition: isResizing ? 'none' : 'left 0.1s ease'
        }}
        onMouseDown={() => setIsResizing(true)}
        onTouchStart={() => setIsResizing(true)}
      >
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-90 group-hover:scale-110 transition-transform"
            >
              <path 
                d="M3 7L10 14L17 7" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Slide Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-black/70 px-4 py-2 rounded-full font-medium">
        Slide to compare
      </div>
    </div>
  );
} 