export default function GameAidsPage() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Ayudas y Recursos de Juego
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Una colección de tablas útiles, listas, enlaces a herramientas externas
        y otros recursos para facilitar tus sesiones de juego.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Game Aid Cards */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Tablas de Encuentros Aleatorios
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Genera encuentros rápidos para diferentes entornos.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Lista Completa de Hechizos
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Busca y filtra hechizos por clase, nivel y escuela.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Generador de Nombres de PNJ
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Obtén inspiración para nombres de personajes no jugadores.
          </p>
        </div>
      </div>
    </div>
  );
}
