<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './$types';

    export let form: ActionData

    const login: SubmitFunction = () => {
      return async ({ result }) => {
        await applyAction(result)
      }
    }
</script>

<pre>{JSON.stringify(form, null, 2)}</pre>

<form use:enhance={login} method="post" action="/login">
    <input type="text" name="user" value={form?.data?.user ?? ''}>
    {#if form?.errors?.user}
        <p class="error">Name is required</p>
    {/if}
    <input type="password" name="password"  value={form?.data?.password ?? ''}>
    {#if form?.errors?.password}
        <p class="error">password is required</p>
    {/if}
    <button type="submit">Login</button>
  </form>

  <style>
    .error {
        color: tomato;
    }
  </style>
<!-- <script lang="ts">
  async function subscribe(event: Event) {
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    await fetch("api/devices", {
      method: "post",
      body: data,
    });
  }
</script>

<hgroup>
  <h1>E-shop</h1>
  <h2>ваш провідник в розумне майбутнє</h2>
</hgroup>

<form on:submit|preventDefault={subscribe}>
  <input type="email" name="email" /><button type="submit">Subscribe</button>
</form>

<h2>Forms</h2>

<form action="/login" method="post">
  <input type="text" name="user">
  <input type="password" name="password">
  <button type="submit">Login</button>
</form> -->
