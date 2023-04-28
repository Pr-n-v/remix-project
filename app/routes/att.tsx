import { Form, useLoaderData } from "@remix-run/react";
import notestyles from "~/styles/Notes.css";
import { ActionArgs, redirect } from "@remix-run/node";
import axios from "axios";


import attlist from "~/styles/NoteList.css";
import NoteList from "components/NoteList";
import NewNote from "components/NewNote";

interface att {
  name: string;
  attendance: string;
  id: string;
}

export default function () {
  const attendData: att[] = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList att={attendData} />
    </main>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: notestyles },
    { rel: "stylesheet", href: attlist },
  ];
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const attData = Object.fromEntries(formData);
  await axios.post("http://127.0.0.1:8000/att", attData);
  return redirect("/att");
}

export async function loader() {
  const attendance = await axios.get("http://127.0.0.1.:8000/getatt");
  return attendance.data;
}