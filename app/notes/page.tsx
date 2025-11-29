import Link from 'next/link';
import { fetchNotes } from '@/lib/api';

export default async function NotesPage() {
  const data = await fetchNotes();

  return (
    <div>
      <h1>Notes</h1>

      <ul style={{ paddingInline: '40px', listStyleType: 'disc' }}>
        {data.notes.map(note => (
          <li key={note.id}>
            <p>
              <Link href={`/notes/${note.id}`}>{note.title}</Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
