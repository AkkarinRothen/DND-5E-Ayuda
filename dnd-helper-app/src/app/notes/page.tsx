import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const notesMarkdown = `
# Notas de Juego

Aquí encontrarás notas, reglas de la casa, lore y otros detalles importantes para tus campañas de D&D 5.5.

## Reglas de Combate Avanzadas
Un resumen de las reglas de combate opcionales para una experiencia más táctica.

*   **Flanqueo:** Atacar a un enemigo desde lados opuestos otorga ventaja.
*   **Puntos de Vigor (Stamina Points):** Un sistema alternativo para gestionar la fatiga en combate.
*   **Lesiones Graves:** Cuando recibes daño crítico, puedes sufrir una lesión duradera.

## Lore de la Región de Eldoria
Detalles sobre la historia, facciones y geografía de la región principal de nuestra campaña.

### Historia
Eldoria fue fundada por los Altos Elfos hace milenios, y su capital, Silverwood, es un testamento a su arquitectura.

### Facciones
*   **La Guardia de Plata:** Protectores del reino.
*   **Los Hijos del Bosque:** Grupos druídicos y exploradores que cuidan la naturaleza.
*   **El Gremio de Mercaderes:** Controlan el comercio y la economía.

## Listado de PNJ Clave
Información sobre los personajes no jugadores más importantes y sus motivaciones.

| Nombre      | Rol         | Motivación               |
|-------------|-------------|--------------------------|
| Elara       | Reina       | Proteger a su pueblo     |
| Kael        | General     | Gloria y poder           |
| Lyra        | Erudita     | Descubrir secretos antiguos |
`;

export default function NotesPage() {
  return (
    <div className="py-8 prose dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {notesMarkdown}
      </ReactMarkdown>
    </div>
  );
}
