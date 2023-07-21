import { db } from "$lib/server/database";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async () => {
  const devicesCount = await db.product.count();
  const skip = Math.floor(Math.random() * devicesCount);

  const devices = db.product.findMany({
    select: {
      title: true,
      slug: true,
    },
    take: 3,
    skip: skip,
  })

  return { devices };
}