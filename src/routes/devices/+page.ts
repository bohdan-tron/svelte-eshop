import type { Product } from '@prisma/client';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('api/devices');
	const devices: Product[] = await response.json();
	console.log(devices);

	return { devices };
};
