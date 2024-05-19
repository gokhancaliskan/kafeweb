import dbConnect from "@/utils/dbConnect";
import Post from "@/models/Post";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { category, main } = req.query;

  if (category) {
    const posts = await Post.find({ category });
    res.status(200).json(posts);
  } else if (main) {
    const posts = await Post.find({ main });
    res.status(200).json(posts);
  } else {
    const posts = await Post.find({});
    res.status(200).json(posts);
  }
}
