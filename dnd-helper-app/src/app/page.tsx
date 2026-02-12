export default function Home() {
  return (
    <div className="text-center py-8">
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        ¡Bienvenido a D&D 5.5 Helper!
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
        Tu recurso definitivo para todas tus aventuras de Dungeons & Dragons 5.5 (2024).
        Aquí encontrarás notas útiles, guías para la creación de personajes,
        y diversas ayudas de juego para enriquecer tus partidas.
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <a href="/notes" className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg hover:bg-blue-700 transition duration-300">
          Explorar Notas
        </a>
        <a href="/character-creation" className="px-6 py-3 bg-green-600 text-white rounded-md text-lg hover:bg-green-700 transition duration-300">
          Crear Personaje
        </a>
      </div>
    </div>
  );
}
