import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";
import { getBaseUrl } from "../utils/baseUrl";
import Image from "next/image";
export const dynamic = "force-dynamic";
export default async function postCard() {
  const baseURL = getBaseUrl();

  const data = await fetch(`${baseURL}/api/posts`);

  const postsData = await data.json();

  return postsData.map(post =>
    <Link href={`/postInfo/${post.id}`}>
    <div className="max-w-2xl mx-auto p-4  sm:max-w-md md:max-w-lg lg:max-w-xl">
        <img width={500} height={500} src={post.url}  className="w-full h-auto rounded-md mb-4" alt="image" />
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-xl font-bold">
          {post.title}
        </h2>
        <p className="text-gray-600">
          {post.createdAt}
        </p>
      </div>
      <p className="text-gray-700 mb-4">
        {post.content}
      </p>
   
    </div>
    </Link>
  );
}
