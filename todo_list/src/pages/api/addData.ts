// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "..";
import axios from "axios";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Todo>
) {
  res
    .status(200)
    .json({ id: 1, title: "test", description: "test", checked: false });
}
