import Link from 'next/link';
import { getSortedNotesData } from '../../../src/lib/notes'; // Adjust path as necessary

export default function NotesPage() {
  const allNotesData = getSortedNotesData();
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Notas de Juego
      </h2>
      <section className="text-lg text-gray-700 dark:text-gray-300">
        <p className="mb-4">
          Aquí encontrarás notas, reglas de la casa, lore y otros detalles importantes
          para tus campañas de D&D 5.5. Explora las notas a continuación:
        </p>
        <ul className="space-y-4">
          {allNotesData.map(({ id, date, title, author }) => (
            <li key={id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link href={`/notes/${id}`} className="block">
                <h3 className="text-xl font-semibold mb-1 text-blue-600 dark:text-blue-400 hover:underline">
                  {title}
                </h3>
                <small className="text-gray-500 dark:text-gray-400">
                  {date} por {author}
                </small>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
