import { ActionFunctionArgs, json } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export async function action({
  request,
}: ActionFunctionArgs) {

  if (request.method === 'POST') {
    try {
    //   const rawData = await request.text();

    //   if (!rawData.trim()) {
    //     throw new Error('Request body is empty');
    //   }
    //   const data = JSON.parse(rawData);
    //   console.log("data: ->>>", data);

    // authenticator.authenticate('google', { scope: ['profile'] });
      
    //   const newUser = await createUser(data);
      return json({ status: 'success', data: "HI FROM GOOGLE AUTH" });     
    } catch (error) {
      console.error('Error creating user:', error);
      return json({ status: 'error', message: 'Failed to create user' }, { status: 500 });
    }
  }
};