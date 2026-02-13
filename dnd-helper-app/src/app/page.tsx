export default function Home() {
  return (
    <div className="min-h-screen px-4 py-12 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          ¡Bienvenido a D&D 5.5 Helper!
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
          Tu recurso definitivo para todas tus aventuras de Dungeons & Dragons 5.5 (2024).
        </p>
        <div className="inline-block px-6 py-3 bg-linear-to-r from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500 rounded-lg text-white font-semibold shadow-lg">
          🎲 ¡Que rueden los dados! 🎲
        </div>
      </div>

      {/* Main Action Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <a href="/notes" className="card animate-slide-in group">
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4 group-hover:animate-dice">📖</span>
            <h2 className="text-3xl font-bold">Explorar Notas</h2>
          </div>
          <p className="text-lg mb-4">
            Accede a una biblioteca completa de reglas, mecánicas y referencias rápidas
            para tus partidas. Organizado por categorías para fácil consulta.
          </p>
          <div className="flex items-center text-sm font-semibold opacity-75 group-hover:opacity-100 transition-opacity">
            <span>Ver recursos</span>
            <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </a>

        <a href="/character-creation" className="card animate-slide-in group" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4 group-hover:animate-dice">⚔️</span>
            <h2 className="text-3xl font-bold">Crear Personaje</h2>
          </div>
          <p className="text-lg mb-4">
            Herramientas paso a paso para crear tu héroe. Desde la elección de raza y clase
            hasta los toques finales de personalidad y trasfondo.
          </p>
          <div className="flex items-center text-sm font-semibold opacity-75 group-hover:opacity-100 transition-opacity">
            <span>Comenzar creación</span>
            <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </div>
        </a>
      </div>

      {/* Quick Access Features */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Recursos Rápidos</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="text-4xl mb-3">🎲</div>
            <h3 className="text-xl font-bold mb-2">Tirador de Dados</h3>
            <p className="text-sm opacity-80">Simula cualquier tipo de dado</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-bold mb-2">Calculadora</h3>
            <p className="text-sm opacity-80">Stats, modificadores y más</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-3">🗡️</div>
            <h3 className="text-xl font-bold mb-2">Combate</h3>
            <p className="text-sm opacity-80">Gestión de iniciativa</p>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-xl font-bold mb-2">Hechizos</h3>
            <p className="text-sm opacity-80">Lista completa de conjuros</p>
          </div>
        </div>
      </div>

      {/* Stats Table Example */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">¿Nuevo en D&D 5.5?</h2>
        <div className="card">
          <h3 className="text-2xl font-bold mb-4">Cambios Principales de 2024</h3>
          <table>
            <thead>
              <tr>
                <th>Categoría</th>
                <th>Cambio</th>
                <th>Impacto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Clases</strong></td>
                <td>Revisión de subclases</td>
                <td className="stat-positive">✓ Más balance</td>
              </tr>
              <tr>
                <td><strong>Razas</strong></td>
                <td>Ahora llamadas "Especies"</td>
                <td className="stat-neutral">~ Nomenclatura</td>
              </tr>
              <tr>
                <td><strong>Hechizos</strong></td>
                <td>Lista actualizada</td>
                <td className="stat-positive">✓ Nuevas opciones</td>
              </tr>
              <tr>
                <td><strong>Reglas</strong></td>
                <td>Simplificación</td>
                <td className="stat-positive">✓ Más accesible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="note">
          <h3 className="text-2xl font-bold mb-3">💡 Consejo de Aventurero</h3>
          <p className="text-lg">
            Si eres nuevo, te recomendamos comenzar por las <strong>Notas Básicas</strong> para
            familiarizarte con las reglas fundamentales del juego. ¡La aventura te espera!
          </p>
        </div>
        
        <div className="mt-10">
          <button className="btn-dice mx-2 mb-4">
            🎲 Comenzar Aventura
          </button>
          <button className="btn-dice mx-2 mb-4" style={{ 
            background: 'linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%)' 
          }}>
            📚 Guía Rápida
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-4xl mx-auto mt-20 pt-10 border-t-2 border-border text-center opacity-75">
        <p className="text-sm">
          D&D 5.5 Helper - Basado en las reglas de Dungeons & Dragons 2024 Edition
        </p>
        <p className="text-xs mt-2">
          Contenido para jugadores y Dungeon Masters
        </p>
      </div>
    </div>
  );
}