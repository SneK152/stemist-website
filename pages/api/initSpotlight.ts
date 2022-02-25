import { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/serverApp";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db.collection("spotlight").doc("spotlight").set({
    spotlight: [],
  });
  res.status(200).json({});
}
