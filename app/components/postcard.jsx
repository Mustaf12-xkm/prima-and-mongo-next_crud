import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";
import {getBaseUrl} from "../utils/baseUrl"

export const dynamic ="force-dynamic";
export default async function postCard() {
  const baseURL = getBaseUrl();

  const data = await fetch(`${baseURL}/api/posts`, {
    cache: "no-store"
  });


  const postsData = await data.json();

  return postsData.map(post =>
    <Link href={`/postInfo/${post.id}`} >
      <Card sx={{ maxWidth: 445, }}>
        <CardActionArea className="hover:none">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className=" p-2"
          >
            {post.title}
          </Typography>
          <CardMedia
            component="img"
            height="140"
            image={post.url}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </Card>
    </Link>
  );
}
