<script lang="ts">
  import '../app.css';
</script>

<header class="container"style="display: flex;justify-content:space-between;">
  <a href="/"><img src="/logo.jpg" alt="logo"></a>
  <nav class="header-nav" style="box-sizing: border-box;">
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

<hr>
<footer>
  <div class="footer-columns">
    <ul>
      <li>Телефон: <a href="tel:3809999999">3809999999</a></li>
      <li>E-mail: <a href="mailto:example@mail.com">example@mail.com</a></li>
    </ul>
    <ul><li>Головний офіс: Верховна Рада</li></ul>
  </div>
  <hr>
  <div class="footer-floor">
    <a href="/">Публічна оферта</a>
    <a href="/">Правила надання послуг</a>
    <div class="footer-socmedia">
      <a href="www.facebook.com" rel="noopener norefferer nofollow"><div class="fb-icon"></div></a>
      <a href="www.twitter.com" rel="noopener norefferer nofollow"><div class="twitter-icon"></div></a>
    </div>
  </div>
</footer>

<style>
  div.footer-floor {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div.footer-socmedia {
    display: flex;
    gap: 15px;
  }
  div.footer-socmedia a div {
    height: 40px;
    width: 40px;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .fb-icon {
    background-image: url(/fb-icon.svg);
  }
  .twitter-icon {
    background-image: url(/twitter-icon.svg);
  }
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
  nav.header-nav ul {
    gap: 15px;
  }
  nav.header-nav ul li a {
    font-size: medium;
    background: rgb(102,102,107);
    background: linear-gradient(90deg, rgba(102,102,107,1) 0%, rgba(61,61,70,1) 97%, rgba(57,60,61,1) 100%);
    font-weight: bold;
    color:#fff;
    transition: background-color 300ms;
  }
  nav.header-nav ul li a:hover {
    background: linear-gradient(90deg, rgba(102,102,107,1) 0%, rgba(61,61,70,1) 0%, rgba(57,60,61,1) 100%); 
  }
</style>