import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { title, post } = req.body;
  const newPost = {
    title,
    post,
  };
  res.status(200).json({ message: "Post created successfully", newPost });
};
