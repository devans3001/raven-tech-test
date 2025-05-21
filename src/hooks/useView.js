import { useState, useEffect } from 'react';

export function useView() {
  // Initialize state with 0 (safe for SSR)
  const [view, setView] = useState(0);

  useEffect(() => {
    // Ensure window is defined (client-side only)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setView(window.innerWidth);
      };

      // Set initial width immediately
      handleResize();

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array = runs once on mount

  return {
    view,
    isDesktop: view >= 768, // Renamed for clarity (true if desktop)
  };
}