import { NextApiRequest, NextApiResponse } from "next";
import db from "@/lib/serverApp";
import Person from "@/lib/types/Person";
import teachers from "@/lib/data/team/teachers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const get = await db.collection("spotlight").doc("spotlight").get();
  const data: Person[] = get.data()?.spotlight;
  const updatedData = data.map((p) => teachers.find((e) => e.name === p.name));
  await db.collection("spotlight").doc("spotlight").set({
    spotlight: updatedData,
  });
  res.status(200).json({});
}
