import { addData, deleteData, getData, updateData } from "@/lib/auth/user";
import { NextApiHandler } from "next";
import db from "@/lib/serverApp";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const data = await getData(req.query.uid as string);
    return res.json(data);
  } else if (req.method === "POST") {
    if (req.cookies.id && (await (await db.collection("ids").doc(req.cookies.id).get()).data())) {
      await db.collection("ids").doc(req.cookies.id).delete();
      const body = JSON.parse(req.body);
      await addData(
        {
          name: body.name,
          profileUrl: body.profileUrl,
        },
        body.uid
      );
      return res.json({});
    } else {
      res.redirect('/auth/register');
    }
  } else if (req.method === "PUT") {
    const body = JSON.parse(req.body);
    await updateData(
      {
        name: body.name,
        profileUrl: body.profileUrl,
      },
      body.uid
    );
    return res.json({});
  } else if (req.method === "DELETE") {
    const body = JSON.parse(req.body);
    await deleteData(body.uid);
    return res.json({});
  }
};

export default handler;
