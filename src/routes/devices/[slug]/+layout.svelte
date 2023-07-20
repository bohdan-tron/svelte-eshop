<script lang="ts">
	import type { LayoutData } from "./$types";

  export let data: LayoutData
</script>

<slot />

<div class="recent-devices">

  <h5>Схожі пристрої, що можуть вас зацікавити:</h5>
  <ul>
    {#each data.devices as device}
      <li><a href="/devices/{device.slug}" title="click here to find out {device.title}">{device.title}</a></li>
    {/each}
  </ul>
</div>

<style>
  .recent-devices {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-top: 100px;
    background-color: #2c3e53;
    border-radius: 10px;
    padding: 10px;
  }
</style>