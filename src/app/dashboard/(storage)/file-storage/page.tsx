'use client'

import { db } from '@/core/database/firebase';
import { DocumentData, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import CategoryForm from '../components/categorys/CategoryForm';
import CategoryList from '../components/categorys/CategoryList';

const CategoryPage = () => {
    const categoryId = 'category-id';
    const [category, setCategory] = useState<null | DocumentData>(null);

    useEffect(() => {
        const getCategory = async () => {
            const docRef = doc(db, 'categories', categoryId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setCategory(docSnap.data());
            } else {
                // Handle category not found
            }
        };
        getCategory();
    }, [categoryId]);

    return (
        <div>
            <CategoryForm />
            <CategoryList />
            <h1>{category?.name}</h1>
            {/* Display subcategories and files here */}
        </div>
    );
};

export default CategoryPage;
