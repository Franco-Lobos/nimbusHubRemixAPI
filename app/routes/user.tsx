import { json, useLoaderData, useActionData, useFetcher} from "@remix-run/react";
import { getUsers, createUser } from "../../dbConnection/models/users";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno


//POST MANAGEMENT EXAMPLE
// export async function action({
//   request,
// }: ActionFunctionArgs) {
//   if (request.method === 'POST') {
//     try {
//       const rawData = await request.text();

//       if (!rawData.trim()) {
//         throw new Error('Request body is empty');
//       }

//       const data = JSON.parse(rawData);
//       console.log("data: ->>>", data)
//       const newUser = await createUser(data);
//       return json({ status: 'success', data: newUser });     
//     } catch (error) {
//       console.error('Error creating user:', error);
//       return json({ status: 'error', message: 'Failed to create user' }, { status: 500 });
//     }
//   }
// };

export let loader: LoaderFunction = async ({ request }: { request: Request }) => {
    const users = await getUsers();
    
    return json(users, { headers: { 'Cache-Control': 'no-store' } });  
    // const response = await fetch('http://localhost:8080/users');
    // const data = await response.json();

    // return json(data);
};

export default function UserApi() {
  //POST MANAGEMENT EXAMPLE
  //let data = useActionData<typeof action>(); 
  // if(!data){
  //   data = useLoaderData<typeof loader>();
  // }
  return (
    // JSON.stringify(useLoaderData<typeof loader>())
    "hi from user.tsx"
  );
}
