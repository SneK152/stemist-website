import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import teachers from "@/lib/teachers";
import { sample } from "lodash";
import type Person from "@/lib/types/Person";
import storage from "@/lib/serverApp";
import { join } from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await storage
    .bucket("stemist-c71a6.appspot.com")
    .file("spotlight.json")
    .download({
      destination: join(process.cwd(), "spotlight.json"),
    });
  const file: Person[] = JSON.parse(
    fs.readFileSync(join(process.cwd(), "spotlight.json")).toString()
  );
  let samp: Person = sample(teachers)!;
  let isFound = file.some((element) => element.name === samp.name);
  while (isFound) {
    samp = sample(teachers)!;
    isFound = file.some((element) => element.name === samp.name);
  }
  file.push(samp);
  fs.writeFileSync(join(process.cwd(), "spotlight.json"), JSON.stringify(file));
  await storage
    .bucket("stemist-c71a6.appspot.com")
    .upload(join(process.cwd(), "spotlight.json"), {
      destination: "spotlight.json",
    });
  res.status(200).json({});
}
