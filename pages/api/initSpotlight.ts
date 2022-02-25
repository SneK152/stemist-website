import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import storage from "@/lib/serverApp";
import { resolve } from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fs.writeFileSync(resolve(__dirname, "spotlight.json"), JSON.stringify([]));
  await storage
    .bucket("stemist-c71a6.appspot.com")
    .upload(resolve(__dirname, "spotlight.json"), {
      destination: "spotlight.json",
    });
  res.status(200).json({});
}
