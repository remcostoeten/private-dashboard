import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Active, DataRef, Over } from "@dnd-kit/core"
import { ColumnDragData } from "@/components/(init-dashboard)/kanban/board-column"
import { TaskDragData } from "@/components/(init-dashboard)/kanban/task-card"

type DraggableData = ColumnDragData | TaskDragData

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function hasDraggableData<T extends Active | Over>(
  entry: T | null | undefined
): entry is T & {
  data: DataRef<DraggableData>
} {
  if (!entry) {
    return false
  }

  const data = entry.data.current

  if (data?.type === "Column" || data?.type === "Task") {
    return true
  }

  return false
}

export const delay = (ms: number = 1000) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const getCurrentDateTime = () => {
  let today = new Date()
  let date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

  return { isoString: today.toISOString(), date, time }
}

export const dayPeriod = (date: Date | string) => {
  const dateObj = new Date(date)
  const hours = dateObj.getHours()
  return hours < 12 ? "AM" : "PM"
}
