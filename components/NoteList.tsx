import { Link } from "@remix-run/react";

interface att {
  name: string;
  attendance: string;
  id: string;
}

export default function ({ att }: { att: att[] }) {
  return (
    <ul id="att-list">
      {att.map((att, index) => (
        <li key={att.id} className="att">
          <Link to={att.id}>
            <article>
              <header>
                <ul className="att-meta">
                  <li>#{index + 1}</li>
                  <li>
                    <time dateTime={att.id}>
                      {new Date().toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                      })}
                    </time>
                  </li>
                </ul>
                <h2>{att.name}</h2>
              </header>
              <p>{att.attendance}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}