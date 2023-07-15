import type { RequestHandler } from "./$types";

// import db from '$lib/database';
import {db} from '$lib/database'
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async (e) => {
  const devices = await db.product.findMany();

  e.setHeaders({
    'Cache-Control': 'max-age=60'
  })

  return json(devices);
};

// import type { RequestHandler } from "./$types";
// api/products GET
// export const GET: RequestHandler = async (e) => {
//   const options: ResponseInit = {
//     status: 418,
//     headers: {
//       x: 'Gona give it to ya'
//     }
//   }

//   return new Response('Hello', options);
// }

// api/POST

export const POST: RequestHandler = async (e) => {
  const data = await e.request.formData()
  const email = data.get('email')

  // sub to the newletter
  console.log(email)

  return new Response(
    JSON.stringify({ sucess: true }),
    {headers: {
      'Content-Type': 'application/json'
    }}
    
  );
}
