'use client'
import { getExpenses, createExpense } from '@/core/database/firebase'
import { useAuth } from '@/core/providers/auth-provider'
import { useState, useEffect } from 'react'
import ExpenseList from '../components/ExpenseList'
import ExpenseForm from '../components/ExpensesForm'
import { toast } from 'sonner'

interface Expense {
  category: string
  amount: number
  date: Date
  description: string
}

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [error, setError] = useState<string | null>(null)
  const { user } = useAuth()

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        if (user) {
          const expenses = await getExpenses(user.uid)
          if (Array.isArray(expenses)) {
            setExpenses(expenses)
          } else {
            console.error('Expenses is not an array:', expenses)
          }
        }
      } catch (err) {
        console.error(err)
        toast('An error occurred. Please try again.')
      }
    }

    fetchExpenses()
  }, [user])

  const handleAddExpense = async (
    category: string,
    amount: number,
    date: Date,
    description: string,
  ) => {
    try {
      await createExpense(user.uid, category, amount, date, description)
      setExpenses((prevExpenses) => [
        ...prevExpenses,
        { category, amount, date, description },
      ])
    } catch (err) {
      console.error(err)
      toast('An error occurred while adding the expense. Please try again.')
    }
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Expenses</h1>
      <ExpenseForm onSubmit={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default ExpensesPage
