import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// ===== INTERFACES MEJORADAS PARA D&D =====
export interface NoteMetadata {
  title: string;
  date: string;
  author: string;
  category: NoteCategory;
  tags?: string[];
  difficulty?: 'Principiante' | 'Intermedio' | 'Avanzado' | 'DM';
  edition?: '5e' | '5.5' | 'Ambas';
  description?: string;
  relatedNotes?: string[]; // IDs de notas relacionadas
}

export type NoteCategory = 
  | 'Reglas Básicas'
  | 'Creación de Personajes'
  | 'Clases'
  | 'Razas/Especies'
  | 'Hechizos'
  | 'Combate'
  | 'Equipo'
  | 'Trasfondos'
  | 'Hazañas'
  | 'Guía del DM'
  | 'Monstruos'
  | 'Objetos Mágicos'
  | 'Multiclase'
  | 'Consejos de Juego'
  | 'Cambios 5.5';

export interface Note extends NoteMetadata {
  id: string;
  content?: string;
  slug?: string;
}

export interface NotesByCategory {
  [category: string]: Note[];
}

const notesDirectory = path.join(process.cwd(), 'notes_content');

// ===== FUNCIÓN PRINCIPAL: OBTENER TODAS LAS NOTAS =====
export function getSortedNotesData(): Note[] {
  if (!fs.existsSync(notesDirectory)) {
    console.warn(`⚠️ Directorio de notas no encontrado: ${notesDirectory}`);
    return [];
  }

  const fileNames = fs.readdirSync(notesDirectory);
  const allNotesData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      try {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(notesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          id,
          slug: id,
          ...(matterResult.data as NoteMetadata),
        };
      } catch (error) {
        console.error(`Error procesando archivo ${fileName}:`, error);
        return null;
      }
    })
    .filter((note): note is Note => note !== null) as Note[];

  // Ordenar por fecha (más reciente primero)
  return allNotesData.sort((a, b) => b.date.localeCompare(a.date));
}

// ===== OBTENER NOTAS POR CATEGORÍA =====
export function getNotesByCategory(category?: NoteCategory): Note[] {
  const allNotes = getSortedNotesData();
  
  if (!category) {
    return allNotes;
  }

  return allNotes.filter((note) => note.category === category);
}

// ===== AGRUPAR NOTAS POR CATEGORÍA =====
export function getNotesGroupedByCategory(): NotesByCategory {
  const allNotes = getSortedNotesData();
  const grouped: NotesByCategory = {};

  allNotes.forEach((note) => {
    const category = note.category || 'Sin Categoría';
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(note);
  });

  return grouped;
}

// ===== BUSCAR NOTAS POR TAGS =====
export function getNotesByTag(tag: string): Note[] {
  const allNotes = getSortedNotesData();
  
  return allNotes.filter((note) => 
    note.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

// ===== BUSCAR NOTAS POR DIFICULTAD =====
export function getNotesByDifficulty(
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado' | 'DM'
): Note[] {
  const allNotes = getSortedNotesData();
  
  return allNotes.filter((note) => note.difficulty === difficulty);
}

// ===== BUSCAR NOTAS POR EDICIÓN =====
export function getNotesByEdition(edition: '5e' | '5.5' | 'Ambas'): Note[] {
  const allNotes = getSortedNotesData();
  
  return allNotes.filter(
    (note) => note.edition === edition || note.edition === 'Ambas'
  );
}

// ===== BÚSQUEDA DE TEXTO =====
export function searchNotes(query: string): Note[] {
  const allNotes = getSortedNotesData();
  const searchQuery = query.toLowerCase();

  return allNotes.filter((note) => {
    const titleMatch = note.title.toLowerCase().includes(searchQuery);
    const descMatch = note.description?.toLowerCase().includes(searchQuery);
    const tagMatch = note.tags?.some((tag) =>
      tag.toLowerCase().includes(searchQuery)
    );

    return titleMatch || descMatch || tagMatch;
  });
}

// ===== OBTENER TODAS LAS CATEGORÍAS DISPONIBLES =====
export function getAllCategories(): NoteCategory[] {
  const allNotes = getSortedNotesData();
  const categories = new Set<NoteCategory>();

  allNotes.forEach((note) => {
    if (note.category) {
      categories.add(note.category);
    }
  });

  return Array.from(categories).sort();
}

// ===== OBTENER TODOS LOS TAGS DISPONIBLES =====
export function getAllTags(): string[] {
  const allNotes = getSortedNotesData();
  const tags = new Set<string>();

  allNotes.forEach((note) => {
    note.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

// ===== OBTENER IDs DE NOTAS PARA RUTAS DINÁMICAS =====
export function getAllNoteIds() {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(notesDirectory);
  
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => ({
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }));
}

// ===== OBTENER DATOS DE UNA NOTA ESPECÍFICA =====
export function getNoteData(id: string): Note {
  // Sanitizar el ID para prevenir path traversal
  const cleanId = id.replace(/[^a-zA-Z0-9-_]/g, '');
  const fullPath = path.join(notesDirectory, `${cleanId}.md`);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`❌ Nota con id '${id}' no encontrada.`);
  }

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id: cleanId,
      slug: cleanId,
      content: matterResult.content,
      ...(matterResult.data as NoteMetadata),
    };
  } catch (error) {
    throw new Error(`Error leyendo la nota '${id}': ${error}`);
  }
}

// ===== OBTENER NOTAS RELACIONADAS =====
export function getRelatedNotes(noteId: string, limit: number = 3): Note[] {
  const currentNote = getNoteData(noteId);
  const allNotes = getSortedNotesData();

  // Si la nota tiene relatedNotes definidas, usarlas
  if (currentNote.relatedNotes && currentNote.relatedNotes.length > 0) {
    return currentNote.relatedNotes
      .map((id) => {
        try {
          return getNoteData(id);
        } catch {
          return null;
        }
      })
      .filter((note): note is Note => note !== null)
      .slice(0, limit);
  }

  // Si no, buscar notas de la misma categoría
  return allNotes
    .filter(
      (note) =>
        note.id !== noteId &&
        note.category === currentNote.category
    )
    .slice(0, limit);
}

// ===== OBTENER ESTADÍSTICAS DE NOTAS =====
export function getNoteStats() {
  const allNotes = getSortedNotesData();
  const categories = getAllCategories();
  const tags = getAllTags();

  const byCategory = categories.reduce((acc, cat) => {
    acc[cat] = allNotes.filter((note) => note.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  const byDifficulty = {
    Principiante: allNotes.filter((n) => n.difficulty === 'Principiante').length,
    Intermedio: allNotes.filter((n) => n.difficulty === 'Intermedio').length,
    Avanzado: allNotes.filter((n) => n.difficulty === 'Avanzado').length,
    DM: allNotes.filter((n) => n.difficulty === 'DM').length,
  };

  return {
    total: allNotes.length,
    byCategory,
    byDifficulty,
    totalCategories: categories.length,
    totalTags: tags.length,
  };
}

// ===== OBTENER NOTAS RECIENTES =====
export function getRecentNotes(limit: number = 5): Note[] {
  const allNotes = getSortedNotesData();
  return allNotes.slice(0, limit);
}

// ===== OBTENER NOTAS DESTACADAS =====
export function getFeaturedNotes(): Note[] {
  const allNotes = getSortedNotesData();
  
  // Puedes añadir un campo "featured: true" en el frontmatter
  // o simplemente devolver las más recientes de categorías importantes
  const importantCategories: NoteCategory[] = [
    'Reglas Básicas',
    'Creación de Personajes',
    'Cambios 5.5',
  ];

  return allNotes
    .filter((note) => importantCategories.includes(note.category))
    .slice(0, 6);
}