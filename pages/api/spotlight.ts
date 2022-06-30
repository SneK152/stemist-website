import { NextApiRequest, NextApiResponse } from "next";
import teachers from "@/lib/data/team/teachers";
import { sample } from "lodash";
import type Person from "@/lib/types/Person";
import db from "@/lib/serverApp";
import { TeacherSubject } from "@/lib/types/Person";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const file: Person[] = [];
  for (let i = 0; i < 4; i++) {
    let samp: Person<TeacherSubject> = sample(teachers)!;
    let isFound = file.some((element) => element.name === samp.name);
    while (
      samp.qualifications === undefined ||
      samp.qualifications.length < 4 ||
      isFound
    ) {
      samp = sample(teachers)!;
      isFound = file.some((element) => element.name === samp.name);
    }
    file.push(samp);
  }
  await db.collection("spotlight").doc("spotlight").set({
    spotlight: file,
  });
  res.status(200).json({});
}
