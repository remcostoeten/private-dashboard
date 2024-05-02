import { db } from '@/core/sqlite';
import { todos } from '@/core/sqlite/schema';
import { redirect } from 'next/navigation';

export const TODO_URL = '/dashboard/todos';

export default async function CreatePage() {
  const TODO_URL = '/dashboard/todos';
  async function createTodo(data: FormData) {
    'use server';

    db.insert(todos)
      .values({
        title: data.get('title') as string,
        completed: 0,
      })
      .run();

    redirect(TODO_URL);
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold font-heading text-xl text-center">
          New Task
        </h1>
        <form action={createTodo} className="flex flex-col gap-2">
          <input
            type="text"
            name="title"
            className="bg-transparent rounded-xl border border-slate-700 focus:border-slate-300 outline-none px-3 py-2 transition-colors"
          />
          <button
            type="submit"
            className="py-2 px-3 bg-slate-300 text-slate-900 hover:bg-slate-100 rounded-xl font-semibold font-heading"
          >
            Create Task
          </button>
        </form>
      </div>
    </>
  );
}
