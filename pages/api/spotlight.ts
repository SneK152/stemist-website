import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import teachers from "@/lib/data/teachers";
import { sample } from "lodash";
import type Person from "@/lib/types/Person";
import db from "@/lib/serverApp";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const spotlight = await db.collection("spotlight").doc("spotlight").get();
  const file: Person[] = spotlight.data()!.spotlight;
  let samp: Person = sample(teachers)!;
  let isFound = file.some((element) => element.name === samp.name);
  while (isFound) {
    samp = sample(teachers)!;
    isFound = file.some((element) => element.name === samp.name);
  }
  file.unshift(samp);
  await db.collection("spotlight").doc("spotlight").set({
    spotlight: file,
  });
  res.status(200).json({});
}
