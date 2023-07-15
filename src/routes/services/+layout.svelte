<hgroup>
  <h1>Наші послуги</h1>
  <h2>Перелік доступних послуг</h2>
</hgroup>
<div class="services-display" style="">
  <aside class="sidebar-menu">
    <hgroup>
      <h6>Послуги:</h6>
      <nav>
        <ul>
          <li>
            <a href="/services/service1">Послуга 1</a>
          </li>
          <li>
            <a href="/services/service2">Послуга 2</a>
          </li>
        </ul>
      </nav>
    </hgroup>
  </aside>
  <main>
    <slot />
  </main>
</div>

<style>
  .sidebar-menu {
    background-color: #23333f;
    padding: 10px;
    border-radius: 10px;
  }
  .services-display {
    display: grid;
    gap: 10px;
    grid-template-rows: 1fr 3fr;
    grid-template-areas: ". .";
  }
</style>
