import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import { db } from '$lib/server/database';

export const GET: RequestHandler = async ({ url }) => {
	const limit = Number(url.searchParams.get('limit') ?? 30);
	const order = url.searchParams.get('order') ?? 'asc';

	const devices = await db.product.findMany({
		orderBy: { id: order },
    take: limit,
	});

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

// export const POST: RequestHandler = async (e) => {
//   const data = await e.request.formData()
//   const email = data.get('email')

//   // sub to the newletter
//   console.log(email)

//   return new Response(
//     JSON.stringify({ sucess: true }),
//     {headers: {
//       'Content-Type': 'application/json'
//     }}

//   );
// }
