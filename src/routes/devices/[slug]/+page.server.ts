import { db } from "$lib/database";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const device = await db.product.findUnique({
    where: { slug: params.slug}
  })

  if (!device) {
    throw error(404, 'Device not found');
  }

  return { device };
}