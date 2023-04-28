import { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  V2_MetaFunction,
} from "@remix-run/react";
import MainNavigation from "components/MainNavigation";

import styles from "~/styles/main.css";

export function meta() {
  return [
    { title: "My Attendance" },
    { name: "description", content: "..." },
    { property: "og:title", content: "..." }]}


export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MainNavigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    // { rel: "icon", href: "/favicon.png" },
  ];
}