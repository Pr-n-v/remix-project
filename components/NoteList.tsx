import { Link } from "@remix-run/react";

interface lib {
    id: number;
  name: string;
  author: string;
  language: string;
  genre: string;
  borrow: string;
  returner: string;
  status: string;

}

export default function ({ lib }: { lib: lib[] }) {
  return (
    <ul id="lib-list">
      {lib.map((lib, index) => (
        <li key={lib.id} className="lib">
          <Link to={lib.id}>
            <article>
              <header>
                <ul className="lib-meta">
                  <li>#{index + 1}</li>
                  <li>
                    <time dateTime={lib.id}>
                      {new Date().toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                      })}
                    </time>
                  </li>
                </ul>
                </header>
                <h2>{lib.name}</h2>          
                <p>taken on {lib.borrow}</p>
                <p>{lib.returner}</p>
                <p>{lib.status}</p>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}