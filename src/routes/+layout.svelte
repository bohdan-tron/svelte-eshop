<script lang="ts">
  import '../app.css';
</script>

<header class="container"style="display: flex;justify-content:space-between;">
  <a href="/"><img src="/logo.jpg" alt="logo"></a>
  <nav style="box-sizing: content-box">
    <ul>
      <li>
        <a href="/">Головна</a>
      </li>
      <li>
        <a href="/services">Послуги</a>
      </li>
      <li>
        <a href="/fares">Тарифи</a>
      </li>
      <li>
        <a href="/devices">Пристрої</a>
      </li>
      <li>
        <a href="/about-us">Про нас</a>
      </li>
      <li>
        <a href="/contacts">Контакти</a>
      </li>
    </ul>
  </nav>
</header>
<hr>

<section class="container">
  <slot />
</section>

<style>
  header.container {
    align-items: center;
  }
  section.container {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  img {
    width: 180px;
    height: 45px;
  }
</style>