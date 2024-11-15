<script lang="ts">
	// import type { PageData } from './$types';

	let { data } = $props();
	let { articles } = data;
	$inspect(articles);
</script>

<section class="mx-auto h-[100vh] max-w-6xl py-10">
	<h1 class="pb-20 text-center text-3xl font-bold">
		Create Articles with SvelteKit + Prisma + SQLite
	</h1>

	<article class="flex min-w-full max-w-7xl items-center justify-between gap-10">
		<div>
			<!-- conditional render of articles else show "no articles" -->
			{#each articles as article}
				<div class="mb-4 w-[550px] rounded-md bg-gray-800 p-4 shadow-md">
					<!-- {JSON.stringify(data)} -->
					<header>
						<h2 class="text-2xl font-bold">{article.title}</h2>
					</header>
					<p class="text-gray-400">{article.content}</p>
					<!-- <p class="text-sm text-gray-400">{article.createdAt}</p> -->
					<div class="mt-5 flex items-center justify-center gap-5">
						<form action="?/deleteArticle&id={article.id}" method="POST" class="w-1/2">
							<button
								type="submit"
								class="w-full rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
							>
								Delete Article
							</button>
						</form>
						<div class="w-1/2">
							<a
								style=""
								href="/{article.id}"
								role="button"
								class="w-[550px] rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
							>
								Edit Article
							</a>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<form action="?/createArticle" method="POST">
			<h3 class="mb-4 text-center text-2xl font-bold">New Article</h3>
			<label for="title"> Title </label>
			<input
				id="title"
				name="title"
				type="text"
				placeholder="Title"
				class="mb-2 w-full rounded-md bg-gray-200 p-2 text-black"
			/>

			<label for="content"> Content </label>
			<textarea
				id="content"
				name="content"
				placeholder="Content"
				class="mb-2 w-full rounded-md bg-gray-200 p-2 text-black"
			></textarea>

			<button
				type="submit"
				class="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
			>
				Create Article
			</button>
		</form>
	</article>
</section>

<style>
	:global(body) {
		@apply bg-sky-900 text-white;
	}
</style>
