import { db } from "$lib/server/database";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, parent }) => {
  const parentData = await parent();
  console.log(parentData)

  const device = await db.product.findUnique({
    where: { slug: params.slug}
  })

  if (!device) {
    throw error(404, 'Device not found');
  }

  return { device };
}