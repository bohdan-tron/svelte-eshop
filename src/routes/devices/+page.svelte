<script lang="ts">
	// import {page} from '$app/stores';
	// import { error } from '@sveltejs/kit';

	async function getDevices() {
		const response = await fetch('api/devices');
		const devices = await response.json();

		return devices;
	}
</script>

<h1>Пристрої</h1>

{#await getDevices()}
	<p>Loading...</p>
{:then devices}
	<!-- <pre>
  {JSON.stringify(devices, null, 2)}
</pre> -->
	<p>Showing {devices.length} devices.</p>

  <div class="itemsList">
	  {#each devices as { slug, title, thumbnail, price, description }}
      <div>
        <img src="{thumbnail}" alt="{title}" width="200">
        <a href="/devices/{slug}">
          {title}
        </a>
        <h3>${price}!</h3>
        <p>{description}</p>
        <a href="#" role="button" class="contrast outline">Add to the cart!</a>
      </div>
    {/each}
  </div>
{:catch error}
	<p>{error.message}</p>
{/await}

<style>
  h3, div.itemsList p {
    margin-bottom: 0;
  }
  div.itemsList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
  @media all and (max-width: 1014px) {
    div.itemsList {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  div.itemsList div {
    width: 220px;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    background-color: #3e422f;
    border-radius: 10px;
  }
  div.itemsList div p {
    height: 50px;
    overflow-y: scroll;
    text-align: center;
    font-size: small;
  }
  div.itemsList div img {
    height: 130px;
    object-fit: cover;
  }
  div.itemsList div a {
    font-size: small;
    color: #b1afaf;
  }
  div.itemsList div a:hover {
    color: #fff;
  }
  div.itemsList div a.button {
    height: 50px;
    width: 100%;
    text-transform: capitalize;
  }
</style>