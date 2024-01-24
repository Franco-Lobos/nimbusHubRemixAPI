import { ActionFunctionArgs, json } from "@remix-run/node";

export async function action({
  request,
}: ActionFunctionArgs) {

  if (request.method === 'POST') {
    try {
      const rawData = await request.text();

      if (!rawData.trim()) {
        throw new Error('Request body is empty');
      }
      const data = JSON.parse(rawData);
      console.log("data: ->>>", data);

      
    //   const newUser = await createUser(data);
      return json({ status: 'success', data: "HI FROM GOOGLE AUTH" });     
    } catch (error) {
      console.error('Error creating user:', error);
      return json({ status: 'error', message: 'Failed to create user' }, { status: 500 });
    }
  }
};