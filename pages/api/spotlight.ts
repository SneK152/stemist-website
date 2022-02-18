import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import teachers from "@/lib/teachers";
import { sample } from "lodash";
import type Person from "@/lib/types/Person";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const file: Person[] = JSON.parse(
    fs.readFileSync("lib/spotlight.json").toString()
  );
  let samp: Person = sample(teachers)!;
  let isFound = file.some((element) => element.name === samp.name);
  while (isFound) {
    samp = sample(teachers)!;
    isFound = file.some((element) => element.name === samp.name);
  }
  file.push(samp);
  fs.writeFileSync("lib/spotlight.json", JSON.stringify(file));
  res.status(200).json({});
}
