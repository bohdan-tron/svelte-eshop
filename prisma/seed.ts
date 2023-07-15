import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

type Device = {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const json = await response.json();
  const devices = json["products"];

  return devices as Device[];
}

function slugify(text: string) {
  return text
    .replace(/\s/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase();
}

async function main() {
  const devices = await getProducts();

  for (const device of devices) {
    await db.product.create({
      data: {
        title: device.title,
        description: device.description,
        price: device.price,
        slug: slugify(device.title),
        thumbnail: device.thumbnail
      }
    });
  }
}

main();
