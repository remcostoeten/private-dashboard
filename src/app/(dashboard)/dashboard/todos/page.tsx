import { db } from "@/core/sqlite";
import { todos, Todo } from "@/core/sqlite/schema";
import TodoItem from "./components/TodoItem";
import { delay } from "@/core/lib/utils";
import CreatePage from "./create/page";
import React from "react";

export const revalidate = 0;

async function fetchTodos() {
  delay();
  return db.select().from(todos).all();
}

export default async function TodosPage() {
  const todos = await fetchTodos();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-semibold font-heading text-xl text-center">
        Your Tasks
      </h1>
      {todos.map((todo: Todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
      <CreatePage />
    </div>
  );
}
