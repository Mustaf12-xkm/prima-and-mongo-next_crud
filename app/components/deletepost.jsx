"use client";
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react';
import { getBaseUrl } from '../utils/baseUrl';

const DeleteButton = ({ id }) => {
  
    const [transition, startTransition] = useTransition();
    const baseURL = getBaseUrl();

    const router = useRouter();
   

    const handleDelete = async (id) => {
        const data = await fetch(`${baseURL}/api/posts/${id}`, {
            method: 'DELETE'
        });
        startTransition(() => router.refresh());
        router.push("/");
    };
  

    return (
        <button   onClick={() => handleDelete(id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
        Delete
      </button>
    );
};

export default DeleteButton;