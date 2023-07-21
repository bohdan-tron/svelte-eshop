<script lang="ts">
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
</form>
