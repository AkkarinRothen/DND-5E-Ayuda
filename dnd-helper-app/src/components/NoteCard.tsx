// components/NoteCard.tsx
import Link from 'next/link';
import { Note } from '@/lib/notes';

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
  const difficultyColors = {
    'Principiante': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Intermedio': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Avanzado': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'DM': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  };

  const editionBadge = {
    '5e': '5E',
    '5.5': '5.5',
    'Ambas': '5E/5.5',
  };

  return (
    <Link href={`/notes/${note.slug}`} className="card group block">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-2xl font-bold group-hover:text-(--primary) transition-colors">
          {note.title}
        </h3>
        {note.edition && (
          <span className="px-2 py-1 text-xs font-bold rounded bg-(--secondary) text-(--foreground) ml-2 shrink-0">
            {editionBadge[note.edition]}
          </span>
        )}
      </div>

      {note.description && (
        <p className="text-base mb-4 opacity-80">
          {note.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 text-sm rounded-full bg-(--primary) text-(--card-bg) font-semibold">
          {note.category}
        </span>
        
        {note.difficulty && (
          <span className={`px-3 py-1 text-sm rounded-full font-semibold ${difficultyColors[note.difficulty]}`}>
            {note.difficulty}
          </span>
        )}
      </div>

      {note.tags && note.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {note.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded bg-(--accent) text-(--card-bg) opacity-80"
            >
              #{tag}
            </span>
          ))}
          {note.tags.length > 4 && (
            <span className="px-2 py-1 text-xs opacity-60">
              +{note.tags.length - 4} más
            </span>
          )}
        </div>
      )}

      <div className="flex justify-between items-center text-sm opacity-60">
        <span>Por {note.author}</span>
        <span>{new Date(note.date).toLocaleDateString('es-ES')}</span>
      </div>

      <div className="mt-4 flex items-center text-sm font-semibold opacity-75 group-hover:opacity-100 transition-opacity">
        <span>Leer más</span>
        <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
      </div>
    </Link>
  );
}