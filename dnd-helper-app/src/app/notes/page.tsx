export default function NotesPage() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Notas de Juego
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Aquí encontrarás notas, reglas de la casa, lore y otros detalles importantes
        para tus campañas de D&D 5.5.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Note Cards */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Reglas de Combate Avanzadas
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Un resumen de las reglas de combate opcionales para una experiencia
            más táctica.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Lore de la Región de Eldoria
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Detalles sobre la historia, facciones y geografía de la región
            principal de nuestra campaña.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Listado de PNJ Clave
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Información sobre los personajes no jugadores más importantes
            y sus motivaciones.
          </p>
        </div>
      </div>
    </div>
  );
}
