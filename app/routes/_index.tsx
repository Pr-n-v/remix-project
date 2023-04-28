
import { Link } from "@remix-run/react";

import homestyle from "~/styles/home.css";
export default function Index() {
  return (
    <main id="attendance">
      <h2>Please enter the student's attendance details</h2>
      
      
      <p id="cta">
        <Link to="/att">Enter Attendance</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homestyle }];
}