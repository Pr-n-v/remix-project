import { Link } from "@remix-run/react";

interface user {
  id: string;
  name: string;
  email: string;
 

}

export default function ({ user }: { user: user[] }) {
  return (
    <ul id="user-list">
      {user.map((user, index) => (
        <li key={user.id} className="lib">
          <Link to={user.id}>
            <article>
              <header>
                <ul className="user-meta">
                  <li>#{index + 1}</li>
                  <li>
                    <time dateTime={user.id}>
                      {new Date().toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                      })}
                    </time>
                  </li>
                </ul>
                </header>
                <h2>{user.name}</h2>          
                <p>{user.email}</p>
                </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}