import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		articles: await prisma.article.findMany()
	};
};

export const actions: Actions = {
	createArticle: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			await prisma.article.create({
				data: {
					title,
					content
				}
			});
		} catch (err) {
			if (err instanceof Error) {
				fail(500, {
					error: err.message
				});
			}
		}
		return {
			status: 201
		};
	},

	deleteArticle: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			fail(400, {
				error: 'id is required'
			});
		}

		try {
			await prisma.article.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (err) {
			if (err instanceof Error) {
				fail(500, {
					error: err.message
				});
			}
		}

		return {
			status: 204
		};
	}
};
