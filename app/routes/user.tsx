import { Form, useLoaderData } from "@remix-run/react";
import notestyles from "~/styles/Notes.css";
import { ActionArgs, redirect } from "@remix-run/node";
import axios from "axios";


import attlist from "~/styles/NoteList.css";
import NoteList from "components/NoteList";
import NewNote from "components/NewNote";
import User from "components/User";
import UserNote from "components/UserNote";

interface user {
  id: string;
  name: string;
  email: string;
}

export default function () {
  const attendData: user[] = useLoaderData();
  return (
    <main>
      <UserNote />
      <User user={attendData} />
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
  await axios.post("http://127.0.0.1:8000/library", attData);
  return redirect("/library");
}

export async function loader() {
  const library = await axios.get("http://127.0.0.1.:8000/getlibrary");
  return library.data;
}


