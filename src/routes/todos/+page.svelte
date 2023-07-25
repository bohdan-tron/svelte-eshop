<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance, type SubmitFunction } from '$app/forms';

	export let data: PageData;
	export let form: ActionData;
	let loading = false;

	const addTodo: SubmitFunction = () => {
		loading = true
		return async ({update}) => {
			loading = false;
			await update()
		}
	}
</script>

<pre>
    {JSON.stringify(form, null, 2)}
    {JSON.stringify(data, null, 2)}
</pre>

<ul>
	{#each data.todos as todo}
		<li>
			<span>{todo.text}</span>
			<form method="post" action="?/removeTodo" use:enhance>
				<input type="hidden" name="id" value={todo.id} />
				<button type="submit" class="delete">x</button>
			</form>
		</li>
	{/each}
</ul>

<form method="post" action="?/addTodo" use:enhance={addTodo}>
	<input type="text" name="todo" />

	{#if form?.missing}
		<p class="error">This field is required!</p>
	{/if}

	<button aria-busy={loading} class:secondary={loading} type="submit">{#if !loading}add todo{/if}</button>
	<button formaction="?/clearTodos" class="secondary" type="submit">Clear</button>
</form>

{#if form?.success}
	<p>Todo (product) is added!!</p>
{/if}
