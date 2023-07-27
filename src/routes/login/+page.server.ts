import { zfd } from 'zod-form-data';
import { fail, type Actions, redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const loginSchema = zfd.formData({
			user: zfd.text(),
			password: zfd.text()
		});
		const result = loginSchema.safeParse(formData);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};
			return fail(400, data);
		}

		throw redirect(303, '/todos');
	}
};
