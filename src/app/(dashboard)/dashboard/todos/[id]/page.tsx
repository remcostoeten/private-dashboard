import { db } from "@/core/sqlite"
import { todos } from "@/core/sqlite/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"
import TodoItem from "../components/TodoItem"
import { delay } from "@/core/lib/utils"
import ToggleTodo from "../components/ToggleTodo"
import DeleteTodo from "../components/DeleteTodo"
export const revalidate = 0

async function fetchTodo(id: string) {
  const res = db
    .select()
    .from(todos)
    .where(eq(todos.id, parseInt(id)))
    .get()

  if (!res) {
    notFound()
  }

  await delay()

  return res
}

interface Props {
  params: {
    id: string
  }
}

export default async function TodoPage({ params }: Props) {
  const todo = await fetchTodo(params.id)

  return (
    <>
      <div className="flex flex-col gap-2">
        <TodoItem {...todo} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
          <ToggleTodo {...todo} />
          <DeleteTodo id={todo.id} />
        </div>
      </div>
    </>
  )
}
