import { json, useLoaderData, useActionData, useFetcher} from "@remix-run/react";
import { getUsers, createUser } from "../../dbConnection/models/users";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno


export let loader: LoaderFunction = async ({ request }: { request: Request }) => {
    const users = await getUsers();
    
    return json(users, { headers: { 'Cache-Control': 'no-store' } });  
};

export default function Weather() {
  //POST MANAGEMENT EXAMPLE
  //let data = useActionData<typeof action>(); 
  // if(!data){
  //   data = useLoaderData<typeof loader>();
  // }
  return (
    <h1>
    "hi from weather.tsx"
    </h1>
  );
}
