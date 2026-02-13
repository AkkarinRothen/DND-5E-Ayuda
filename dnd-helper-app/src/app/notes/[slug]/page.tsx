// app/notes/[slug]/page.tsx
import { getNoteData, getRelatedNotes } from '@/lib/notes';
import NoteCard from '@/components/NoteCard';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import { getAllNoteIds } from '../../../lib/notes';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export const dynamicParams = false;

export async function generateStaticParams() {
  const noteIds = getAllNoteIds();
  return noteIds;
}

interface NotePageProps {
  params: {
    slug: string;
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = params;

  // Validar que existe el slug
  if (!slug) {
    notFound();
  }

  let note;
  let relatedNotes;

  try {
    note = getNoteData(slug);
    relatedNotes = getRelatedNotes(slug, 3);
  } catch (error) {
    console.error(`Error cargando nota: ${slug}`, error);
    notFound();
  }

  const difficultyColors = {
    'Principiante': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Intermedio': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Avanzado': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'DM': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  };

  return (
    <div className="min-h-screen px-4 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 text-sm flex-wrap">
            <a 
              href="/notes" 
              className="opacity-70 hover:opacity-100 transition-opacity hover:text-(--primary)"
            >
              ← Volver a notas
            </a>
            <span className="opacity-50">|</span>
            <span className="px-3 py-1 rounded-full bg-(--primary) text-(--card-bg) font-semibold">
              {note.category}
            </span>
            {note.edition && (
              <span className="px-2 py-1 text-xs font-bold rounded bg-(--secondary) text-(--foreground)">
                {note.edition === '5.5' ? '5.5' : note.edition === '5e' ? '5E' : '5E/5.5'}
              </span>
            )}
            {note.difficulty && (
              <span className={`px-3 py-1 text-xs rounded-full font-semibold ${difficultyColors[note.difficulty]}`}>
                {note.difficulty}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{note.title}</h1>

          {note.description && (
            <p className="text-xl opacity-80 mb-4">{note.description}</p>
          )}

          <div className="flex flex-wrap gap-4 text-sm opacity-70 mb-4">
            <span className="flex items-center gap-1">
              📅 {new Date(note.date).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-1">✍️ {note.author}</span>
          </div>

          {note.tags && note.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded bg-(--accent) text-(--card-bg) hover:bg-(--primary) transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Contenido principal */}
        <article className="card prose prose-lg max-w-none
                          prose-headings:font-['Cinzel'] 
                          prose-headings:text-(--primary)
                          prose-h1:text-4xl
                          prose-h2:text-3xl
                          prose-h3:text-2xl
                          prose-p:text-(--foreground)
                          prose-p:leading-relaxed
                          prose-a:text-(--accent)
                          prose-a:no-underline
                          prose-a:font-semibold
                          hover:prose-a:text-(--primary)
                          prose-strong:text-(--primary)
                          prose-strong:font-bold
                          prose-ul:list-disc
                          prose-ol:list-decimal
                          prose-li:marker:text-(--primary)
                          prose-code:bg-(--border)
                          prose-code:text-(--foreground)
                          prose-code:px-2
                          prose-code:py-1
                          prose-code:rounded
                          prose-code:before:content-none
                          prose-code:after:content-none
                          prose-pre:bg-(--card-bg)
                          prose-pre:border-2
                          prose-pre:border-(--border)
                          prose-blockquote:border-l-4
                          prose-blockquote:border-(--secondary)
                          prose-blockquote:bg-(--card-bg)
                          prose-blockquote:italic
                          prose-table:border-collapse
                          prose-th:bg-(--primary)
                          prose-th:text-(--card-bg)
                          prose-td:border
                          prose-td:border-(--border)">
          <ReactMarkdown>{note.content || ''}</ReactMarkdown>
        </article>

        {/* Notas relacionadas */}
        {relatedNotes.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              📖 Notas Relacionadas
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNotes.map((relatedNote, index) => (
                <div
                  key={relatedNote.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <NoteCard note={relatedNote} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navegación */}
        <div className="mt-12 pt-8 border-t-2 border-(--border) flex justify-between items-center flex-wrap gap-4">
          <a 
            href="/notes" 
            className="btn-dice"
          >
            ← Ver todas las notas
          </a>
          
          <div className="flex gap-2">
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </div>
  );
}

// Metadata dinámica
export async function generateMetadata({ params }: NotePageProps) {
  const { slug } = params;
  
  try {
    const note = getNoteData(slug);
    return {
      title: `${note.title} | D&D 5.5 Helper`,
      description: note.description || `Guía de D&D 5.5: ${note.title}`,
    };
  } catch {
    return {
      title: 'Nota no encontrada | D&D 5.5 Helper',
    };
  }
}