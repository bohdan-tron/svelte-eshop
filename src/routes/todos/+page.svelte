<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;
	type Data = {
		success: boolean;
		errors: Record<string, string>;
	};
	let form: Data;

	async function addTodo(event: Event) {
		const formEl = event.target as HTMLFormElement;
		const data = new FormData(formEl);

		console.dir(data);

		const response = await fetch(formEl.action, {
			method: 'post',
			body: data
		});

		const responseData = await response.json();

		form = responseData;

		formEl.reset();

		await invalidateAll();
	}
	async function removeTodo(event: Event) {
		const formEl = event.target as HTMLFormElement
		const data = new FormData(formEl)
		const response = await fetch(formEl.action, {
		    method: 'delete',
		    body: data
		})

        await invalidateAll();
	}
</script>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form on:submit|preventDefault={removeTodo} method="post">
				<input type="hidden" name="id" value={todo.id} />
				<button type="submit" class="delete">x</button>
			</form>
		</li>
	{/each}
</ul>

<form on:submit|preventDefault={addTodo} method="post">
	<input type="text" name="todo" />
	<button type="submit">add todo</button>
</form>
