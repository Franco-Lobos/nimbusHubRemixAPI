import { json } from "@remix-run/react";
import { getUsers } from "./dbConnection/models/users";

import { useLoaderData } from "@remix-run/react";

export let loader : any = async ()=>{
  const users = await getUsers();
  return json(users);
}

export default function App() {
  const data =  useLoaderData();
  return (
    JSON.stringify(data)
  );
}
