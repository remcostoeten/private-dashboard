'use client'
import { db } from '@/core/database/firebase';

import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';

const CategoryForm = () => {
    const [name, setName] = useState('');
    const [parent, setParent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'categories'), {
                name,
                parent,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            setName('');
            setParent('');
            // Update state to reflect the newly created category
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Category Name
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter category name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="parent" className="text-sm font-medium text-gray-700">
                    Parent Category
                </label>
                <select
                    id="parent"
                    value={parent}
                    onChange={(e) => setParent(e.target.value)}
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                    <option value="">Select Parent Category</option>
                    {/* Populate options with existing categories */}
                </select>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Create Category
            </button>
        </form>
    );
};

export default CategoryForm;
