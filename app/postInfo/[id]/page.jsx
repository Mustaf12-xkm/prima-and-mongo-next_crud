"use client";
import Link from "next/link";
import React from "react";
import DeleteButton from "../../components/deletepost";
import { getBaseUrl } from "../../utils/baseUrl";

export const dynamic = "force-dynamic";

async function detailpage({ params }) {
  const { id } = params;  const baseURL = getBaseUrl();
  const response = await fetch(`${baseURL}/api/posts/${id}`,{  mode: "no-cors",});
  const data = await response.json();


  return (
    <div className="max-w-2xl mx-auto p-4  sm:max-w-md md:max-w-lg lg:max-w-xl">
      <img
        src={data.message.url}
        alt="Info Image"
        className="w-full h-auto rounded-md mb-4"
      />
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-xl font-bold">
          {data.message.title}
        </h2>
        <p className="text-gray-600">
          {data.message.createdAt}
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        {data.message.content}
      </p>
      <div className="flex justify-end">
        <DeleteButton id={id} />
        <Link
          href={`/editpage/${data.message.id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </Link>
      </div>
    </div>
  );
}

export default detailpage;
