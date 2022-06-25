import StudentData from "../types/StudentData";

export const fetchUser = async (
  method: "GET" | "POST" | "PUT" | "DELETE",
  uid: string,
  inputBody?: Partial<StudentData>
): Promise<StudentData | {}> => {
  if (method === "GET") {
    const res = await fetch(`/api/user?uid=${uid}`, {
      method,
    });
    const json = await res.json();
    return json;
  } else if (method === "POST") {
    const body = JSON.stringify({ ...(inputBody as StudentData), uid });
    const res = await fetch(`/api/user`, {
      method,
      body,
    });
    const json = await res.json();
    return json;
  } else if (method === "PUT") {
    const body = JSON.stringify({
      ...(inputBody as Partial<StudentData>),
      uid,
    });
    const res = await fetch(`/api/user`, {
      method,
      body,
    });
    const json = await res.json();
    return json;
  } else {
    const res = await fetch(`/api/user`, {
      method,
    });
    const json = await res.json();
    return json;
  }
};
