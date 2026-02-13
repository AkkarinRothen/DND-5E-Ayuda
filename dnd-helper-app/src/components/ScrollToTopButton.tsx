// dnd-helper-app/src/components/ScrollToTopButton.tsx
'use client';

export default function ScrollToTopButton() {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="px-4 py-2 rounded bg-(--border) hover:bg-(--accent) text-(--foreground) hover:text-(--card-bg) transition-all font-semibold"
    >
      ↑ Subir
    </button>
  );
}