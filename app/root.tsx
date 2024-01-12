import { Outlet, LiveReload } from "@remix-run/react";

export default function Root() {
  return (
    <>
      <Outlet></Outlet>
      <LiveReload />
    </>
  );
}
