import { NavLink } from "@remix-run/react";


export default function () {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          { <NavLink to="/">Home </NavLink>}
        </li>
        <li className="nav-item">
          { <NavLink to="/att">Attendance</NavLink> }
        </li>
       </ul>
    </nav>
  );
}