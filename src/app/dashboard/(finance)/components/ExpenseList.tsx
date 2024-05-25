'use client'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const ExpenseList = ({ expenses }) => {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses)

  const handleFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase()
    const filtered = expenses.filter((expense) =>
      expense.category.toLowerCase().includes(filterValue),
    )
    setFilteredExpenses(filtered)
  }

  return (
    <div>
      <Input
        type="text"
        placeholder="Filter by category..."
        onChange={handleFilterChange}
      />
      <ul>
        {filteredExpenses.map((expense) => (
          <li key={expense.id}>
            {expense.category} - {expense.amount}€ -{' '}
            {expense.date.toLocaleDateString()}
            {expense.description && ` - ${expense.description}`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList
