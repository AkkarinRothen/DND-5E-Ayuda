// components/NoteFilters.tsx
'use client';

import { NoteCategory } from '@/lib/notes';

interface NoteFiltersProps {
  categories: NoteCategory[];
  selectedCategory: NoteCategory | 'Todas';
  onCategoryChange: (category: NoteCategory | 'Todas') => void;
  selectedDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
  selectedEdition: string;
  onEditionChange: (edition: string) => void;
}

export default function NoteFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedDifficulty,
  onDifficultyChange,
  selectedEdition,
  onEditionChange,
}: NoteFiltersProps) {
  const difficulties = ['Todas', 'Principiante', 'Intermedio', 'Avanzado', 'DM'];
  const editions = ['Todas', '5e', '5.5', 'Ambas'];

  return (
    <div className="card mb-8">
      <h3 className="text-2xl font-bold mb-4">🎯 Filtros</h3>
      
      {/* Filtro por Categoría */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3 opacity-80">
          Categoría
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange('Todas')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300
              ${selectedCategory === 'Todas'
                ? 'bg-(--primary) text-(--card-bg) scale-105'
                : 'bg-(--border) text-(--foreground) hover:bg-(--accent) hover:text-(--card-bg)'
              }`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-(--primary) text-(--card-bg) scale-105'
                  : 'bg-(--border) text-(--foreground) hover:bg-(--accent) hover:text-(--card-bg)'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro por Dificultad */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-3 opacity-80">
          Nivel de Dificultad
        </label>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => onDifficultyChange(difficulty)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300
                ${selectedDifficulty === difficulty
                  ? 'bg-(--secondary) text-(--foreground) scale-105'
                  : 'bg-(--border) text-(--foreground) hover:bg-(--accent) hover:text-(--card-bg)'
                }`}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro por Edición */}
      <div>
        <label className="block text-sm font-semibold mb-3 opacity-80">
          Edición
        </label>
        <div className="flex flex-wrap gap-2">
          {editions.map((edition) => (
            <button
              key={edition}
              onClick={() => onEditionChange(edition)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300
                ${selectedEdition === edition
                  ? 'bg-(--accent) text-(--card-bg) scale-105'
                  : 'bg-(--border) text-(--foreground) hover:bg-(--accent) hover:text-(--card-bg)'
                }`}
            >
              {edition}
            </button>
          ))}
        </div>
      </div>

      {/* Botón para limpiar filtros */}
      {(selectedCategory !== 'Todas' || selectedDifficulty !== 'Todas' || selectedEdition !== 'Todas') && (
        <button
          onClick={() => {
            onCategoryChange('Todas');
            onDifficultyChange('Todas');
            onEditionChange('Todas');
          }}
          className="mt-6 w-full px-4 py-3 rounded-lg bg-(--border) hover:bg-(--primary)
                   text-(--foreground) hover:text-(--card-bg)
                   font-semibold transition-all duration-300"
        >
          🔄 Limpiar todos los filtros
        </button>
      )}
    </div>
  );
}
