import type { Product } from '@prisma/client';
import type { PageLoad } from './$types';

//  { fetch } is usefull to prevent 'you cant use relative URL'
export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('api/devices');
	const devices: Product[] = await response.json();

	return { devices };
};
