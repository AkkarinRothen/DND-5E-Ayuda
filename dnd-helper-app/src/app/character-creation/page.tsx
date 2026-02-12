import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const characterCreationMarkdown = `
# Guía de Creación de Personajes

Aquí encontrarás recursos y guías paso a paso para crear tus personajes
de D&D 5.5, desde la elección de la raza y clase hasta la asignación de habilidades
y el trasfondo.

## Paso 1: Elige tu Raza
Cada raza en D&D 5.5 tiene sus propias ventajas y desventajas. Considera la historia
y las bonificaciones de estadísticas que cada una ofrece.

*   **Humanos:** Versátiles y adaptables, con un bono a todas las estadísticas.
*   **Elfos:** Ágiles y sabios, con bonificaciones a Destreza.
*   **Enanos:** Robustos y resistentes, con bonificaciones a Constitución.

## Paso 2: Elige tu Clase
Tu clase define tus habilidades, tu estilo de combate y tu rol en el grupo.

*   **Guerrero:** Maestros en el combate, pueden usar una amplia variedad de armas y armaduras.
*   **Mago:** Lanzadores de conjuros que manipulan la magia arcana.
*   **Clérigo:** Sacerdotes que canalizan el poder divino para curar y proteger.

## Paso 3: Asigna Puntuaciones de Habilidad
Determina tus seis puntuaciones de habilidad: Fuerza, Destreza, Constitución,
Inteligencia, Sabiduría y Carisma. Puedes usar el método de tirada de dados
(4d6, descarta el más bajo) o el método de compra de puntos.

| Habilidad      | Descripción                                   |
|----------------|-----------------------------------------------|
| Fuerza         | Mide el poder físico y el entrenamiento       |
| Destreza       | Mide la agilidad, los reflejos y el equilibrio |
| Constitución   | Mide la salud, el vigor y la fuerza vital     |
| Inteligencia   | Mide la agudeza mental, el recuerdo y la razón|
| Sabiduría      | Mide la perspicacia, el sentido común y la intuición|
| Carisma        | Mide la fuerza de la personalidad, la persuasión, el liderazgo y el atractivo físico|

Continúa con los pasos restantes: elegir trasfondo, equipamiento, conjuros, etc.
`;

export default function CharacterCreationPage() {
  return (
    <div className="py-8 prose dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {characterCreationMarkdown}
      </ReactMarkdown>
    </div>
  );
}
