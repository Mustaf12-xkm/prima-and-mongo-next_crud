"use client";
import { CldUploadWidget } from "next-cloudinary";
import React, { useState, useTransition } from "react";
import { useRouter } from 'next/navigation';
import { getBaseUrl } from "../utils/baseUrl";


function page() {
  const [transition, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState(null);
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState(null);
  const router = useRouter();
  const baseURL = getBaseUrl();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const registerPost = await fetch(`${baseURL}/api/posts/`, {
        method: "POST",
        
        body: JSON.stringify({ title, content, url: imageUrl }),
      });
  
      setContent("");
      setTitle("");
      setImageUrl(null);
  
      router.push("/");
       startTransition(() => router.refresh());
     
    } catch (error) {
      // Handle the error here
     return console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      <h1 className="m-8 text-2xl">create post</h1>
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
          <CldUploadWidget
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
          add post
        </button>
      </form>
    </div>
  );
}

export default page;
