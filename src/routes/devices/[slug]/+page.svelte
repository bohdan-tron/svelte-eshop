<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en', { dateStyle: 'full' }).format(date);
  }
</script>

<hgroup>
  <h1>{data.device.title}</h1>
  <h2>{formatDate(data.device.createdAt)}</h2>
</hgroup>

<div class="content">
  <img src="{data.device.thumbnail}" alt="{data.device.title}">
  <h3>{@html data.device.description}</h3>
  <h5>Ціна: ${@html data.device.price}</h5>
  <a href="#" role="button" class="contrast outline">Додати до кошика!</a>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
  h3, h5 {
    margin: 0;
  }
  .content img {
    height: 350px;
    object-fit: contain;
  }
</style>