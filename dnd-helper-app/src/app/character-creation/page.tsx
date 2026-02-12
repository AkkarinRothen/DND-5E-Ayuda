export default function CharacterCreationPage() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Guía de Creación de Personajes
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Aquí encontrarás recursos y guías paso a paso para crear tus personajes
        de D&D 5.5, desde la elección de la raza y clase hasta la asignación de habilidades
        y el trasfondo.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder Character Creation Cards */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Paso 1: Elige tu Raza
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Explora las diferentes razas y sus bonificaciones raciales.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Paso 2: Elige tu Clase
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Selecciona la clase que mejor se adapte a tu estilo de juego.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Paso 3: Asigna Puntuaciones de Habilidad
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Decide cómo distribuir tus puntos de habilidad.
          </p>
        </div>
      </div>
    </div>
  );
}
