"use client";

/** Keeps document locked to dark mode (light mode disabled). */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return children;
}

/** Inline script to force dark before paint and avoid a flash. */
export const themeInitScript = `(function(){try{var d=document.documentElement;d.classList.add('dark');d.style.colorScheme='dark';try{localStorage.removeItem('theme')}catch(e){}}catch(e){}})();`;
