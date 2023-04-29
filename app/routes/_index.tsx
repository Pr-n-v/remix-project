
import { Link } from "@remix-run/react";

import homestyle from "~/styles/home.css";
export default function Index() {
  return (
    <main id="attendance">
      <h2>Welcome to the world of books :3</h2>
      
      
      <p id="cta">
        <Link to="/library">Book details !!!!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homestyle }];
}