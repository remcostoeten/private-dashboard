import { db } from '@/core/sqlite';
import { todos } from '@/core/sqlite/schema';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';
import { TODO_URL } from '../create/page';

async function deleteTodo(data: FormData) {
  'use server';

  db.delete(todos)
    .where(eq(todos.id, parseInt(data.get('id') as string)))
    .run();

  redirect(TODO_URL);
}

export default async function DeleteTodo({ id }: { id: number }) {
  return (
    <form action={deleteTodo} className="w-full">
      <button
        name="id"
        value={id}
        type="submit"
        className="py-2 px-3 bg-red-400 hover:bg-red-300 transition-colors text-slate-900 rounded-xl font-semibold font-heading w-full"
      >
        Delete
      </button>
    </form>
  );
}
