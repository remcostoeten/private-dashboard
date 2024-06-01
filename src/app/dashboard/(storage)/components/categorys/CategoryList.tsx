'use client'

import { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '@/core/database/firebase';
import Link from 'next/link';

export default function CategoryList() {
    const [categories, setCategories] = useState<{ id: string, name: string }[]>([]);

    useEffect(() => {
        let isMounted = true;

        const getCategories = async () => {
            const q = query(collection(db, 'categories'));
            const querySnapshot = await getDocs(q);
            if (isMounted) {
                setCategories(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, name: doc.data().name })));
            }
        };
        getCategories();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <ul className="list-disc list-inside">
            {categories.map((category) => (
                <li key={category.id} className="mb-2">
                    <Link href={`/dashboard/file-storage/${category.id}`} className="text-blue-500 hover:underline">{category.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export const CategoryForm = () => {
    const [name, setName] = useState('');
    const [parent, setParent] = useState('');
    const [parentCategories, setParentCategories] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const getParentCategories = async () => {
            const q = query(collection(db, 'categories'), where('parent', '==', ''));
            const querySnapshot = await getDocs(q);
            if (isMounted) {
                setParentCategories(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, name: doc.data().name })));
            }
        };
        getParentCategories();

        return () => {
            isMounted = false;
        };
    }, []);

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
                    {parentCategories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Create Category
            </button>
        </form>
    );
};

