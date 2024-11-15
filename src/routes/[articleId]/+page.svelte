<script lang="ts">
	let { data } = $props();

	let { article } = data;

	$inspect(article);
</script>

<form action="?/updateArticle" method="POST">
	<h3 class="mb-4 text-center text-2xl font-bold">
		Editing: {article.title}
	</h3>
	<label for="title"> Title </label>
	<input
		id="title"
		name="title"
		type="text"
		placeholder="Title"
		value={article.title}
		class="mb-2 w-full rounded-md bg-gray-200 p-2 text-black"
	/>

	<label for="content"> Content </label>
	<textarea
		id="content"
		name="content"
		placeholder="Content"
		value={article.content}
		class="mb-2 w-full rounded-md bg-gray-200 p-2 text-black"
	></textarea>

	<button
		type="submit"
		class="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
	>
		Create Article
	</button>
</form>

<style>
	:global(body) {
		@apply bg-gray-900 text-white;
	}
</style>
