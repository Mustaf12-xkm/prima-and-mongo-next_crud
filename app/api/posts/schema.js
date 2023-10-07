import { z } from "zod";

const postSchema = z.object({
  title: z.string(),
  content: z.string(),
  url: z.string()
});
export default postSchema;
