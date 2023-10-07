"use client";
import { CldUploadWidget } from "next-cloudinary";
import React, { useEffect, useState, useTransition } from "react";
import { useRouter } from 'next/navigation';
import { getBaseUrl } from "../../utils/baseUrl";
export const dynamic ="force-dynamic";

 function page({params}) {
  const baseURL = getBaseUrl();

  const { id } = params;
const [transition, startTransition] = useTransition();

  const [imageUrl, setImageUrl] = useState(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const router = useRouter();
    useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${baseURL}/api/posts/${id}`);
      const data = await response.json();
      // Update the state with the fetched data
      setContent(data.message.content);
      setTitle(data.message.title);
      setImageUrl(data.message.url);
    };
    
    fetchData();
  }, [id]);
  
  const handleSubmit = async e => {
    e.preventDefault();

    const registerPost = await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content, url: imageUrl })
    });

    setContent("");
    setTitle("");
    setImageUrl(null);

    router.push("/");
    startTransition(() => router.refresh());
  };

  return (
    <div>
      <h1 className="m-8 text-2xl">update post</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            onChange={e => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            value={title}
            placeholder="Title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <input
            onChange={e => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            type="text"
            value={content}
            placeholder="Content"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file"
          >
            File
          </label>
          <CldUploadWidget value={imageUrl}
            uploadPreset="wydqjoko"
            onUpload={(result, widget) =>
              // @ts-ignore
              setImageUrl(result.info.url)}
          >
            {({ open }) => {
              return (
                <button
                  className=" bg-slate-400 py-4 px-2 rounded-md m-4 text-white"
                  onClick={e => {
                    e.preventDefault();
                    open();
                  }}
                >
                  Upload an Image
                </button>
              );
            }}
          </CldUploadWidget>
          {imageUrl &&
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-2">
                Image Preview:
              </label>
              <img
                src={imageUrl}
                alt="Preview"
                className=" h-16 w-16 object-cover rounded-md"
              />
            </div>}
        </div>
        <button type="submit" className=" bg-slate-500 text-white font-bold py-2 px-4 rounded mr-2 flex justify-end items-end">
        update
        </button>
      </form>
    </div>
  );
}

export default page;
