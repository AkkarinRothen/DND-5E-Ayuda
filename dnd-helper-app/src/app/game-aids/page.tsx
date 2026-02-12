import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const gameAidsMarkdown = `
# Ayudas y Recursos de Juego

Una colección de tablas útiles, listas, enlaces a herramientas externas
y otros recursos para facilitar tus sesiones de juego.

## Tablas de Encuentros Aleatorios
Útil para generar encuentros rápidos en diferentes entornos.

### Bosque
| d6 | Encuentro            |
|----|----------------------|
| 1  | 1d4 Goblins          |
| 2  | 1d2 Lobos            |
| 3  | 1 Oso Pardo          |
| 4  | 1d6 Bandidos         |
| 5  | Un explorador solitario |
| 6  | Nada                 |

### Mazmorra
| d6 | Encuentro            |
|----|----------------------|
| 1  | 1d4 Esqueletos       |
| 2  | 1d2 Zombis           |
| 3  | 1 Ojo Tirano Menor   |
| 4  | 1d6 Kobolds          |
| 5  | Trampa de foso       |
| 6  | Nada                 |

## Lista Completa de Hechizos
Próximamente: Una base de datos de hechizos con filtros por clase, nivel y escuela.

## Generador de Nombres de PNJ
Genera nombres aleatorios para personajes no jugadores para inspirarte.

*   **Humanos:** Elara, Borin, Seraphina, Kaelen
*   **Elfos:** Aerion, Lyra, Faelar, Sylvana
*   **Enanos:** Thrain, Griselda, Durin, Borghild
`;

export default function GameAidsPage() {
  return (
    <div className="py-8 prose dark:prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {gameAidsMarkdown}
      </ReactMarkdown>
    </div>
  );
}
