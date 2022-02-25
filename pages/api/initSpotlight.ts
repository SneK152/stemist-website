import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import storage from "@/lib/serverApp";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fs.writeFileSync("lib/spotlight.json", JSON.stringify([]));
  await storage
    .bucket("stemist-c71a6.appspot.com")
    .upload("lib/spotlight.json", {
      destination: "spotlight.json",
    });
  res.status(200).json({});
}
