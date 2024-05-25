'use client'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const ExpenseForm = ({ onSubmit }) => {
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState(new Date())
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(category, amount, date, description)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-gray-700 font-bold mb-2"
        >
          Category
        </label>
        <Input
          type="text"
          id="category"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
          Amount (euros)
        </label>
        <Input
          type="number"
          id="amount"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Date
        </label>
        <Input
          type="date"
          id="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={date.toISOString().split('T')[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description (optional)
        </label>
        <textarea
          id="description"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Expense
      </button>
    </form>
  )
}

export default ExpenseForm
