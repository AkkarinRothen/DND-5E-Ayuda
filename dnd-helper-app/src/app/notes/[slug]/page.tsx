import { getAllNoteIds } from '../../../lib/notes';

export async function generateStaticParams() {
  const noteIds = getAllNoteIds();
  return noteIds;
}