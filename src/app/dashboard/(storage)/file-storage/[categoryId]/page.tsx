'use client'
import { useState, useEffect } from 'react';
import { getDocs, collection, query, where, DocumentData, doc, getDoc } from 'firebase/firestore';
import { db } from '@/core/database/firebase';
import FileUpload from '@/components/file-upload';
import { UploadFileResponse } from 'uploadthing/client';

interface CategoryData extends DocumentData {
    name: string;
}

const CategoryPage = ({ categoryId }: { categoryId: string }) => {
    const [category, setCategory] = useState<CategoryData | null>(null);
    const [files, setFiles] = useState<UploadFileResponse[]>([]);

    useEffect(() => {
        console.log('categoryId:', categoryId);

        let isMounted = true;

        const getCategory = async () => {
            const docRef = doc(db, 'categories', categoryId);
            const docSnap = await getDoc(docRef);
            if (isMounted) {
                console.log('category data:', docSnap.data());
                setCategory(docSnap.data() as CategoryData || null);
            }
        };

        const getFiles = async () => {
            const q = query(collection(db, 'category'), where('categoryId', '==', categoryId));
            const querySnapshot = await getDocs(q);
            if (isMounted) {
                setFiles(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as UploadFileResponse)));
            }
        };

        getCategory();
        getFiles();

        return () => {
            isMounted = false;
        };
    }, [categoryId]);
    console
    return (
        <div>
            <h1>{category?.name}</h1>
            <FileUpload categoryId={categoryId} />
            <ul>
                {files.map((file) => (
                    <li key={file.id}>
                        <a href={file.url}>{file.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;