import { NextResponse } from "next/server";
import postSchema from "./schema";
import prisma from "../../../prisma/client";


export async function GET() {

  const postsInfo = await prisma.post.findMany({ orderBy: { id: 'desc' } });
  return NextResponse.json(postsInfo);

};



export async function POST (request) {
  try {
    const body = await request.json();

    const validation = postSchema.safeParse(body);

    if (validation.success) {

        const registeredPost = await prisma.post.create({
            data: {
                content: validation.data.content,
                url: validation.data.url,
                title: validation.data.title,
            }
        });

        return NextResponse.json({ message: "Created Post" }, { status: 200, });
    } else {
        // @ts-ignore
        return NextResponse.json({ message: validation.error.errors }, { status: 400, });
    }
} catch (err) {
    return NextResponse.json({ message: err.message }, { status: 400, });
}
};
