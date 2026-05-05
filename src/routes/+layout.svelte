<script>
  import "../app.css";

  let { children } = $props();
</script>

<div class="app">
  <aside class="sidebar">
    <div class="logo">
      <a href="/">
        <img src="/images/logo.png" alt="Outfitr Logo" />
      </a>
    </div>

    <nav>
      <a href="/">
        <img src="/images/icon-logo-black.png" alt="Outfitr Logo" />
        <span>Home</span>
      </a>

      <a href="/wardrobe">
        <img src="/images/wardrobe.png" alt="Wardrobe" />
        <span>Wardrobe</span>
      </a>

      <a href="/generator">
        <img src="/images/fashion-design.png" alt="Generator" />
        <span>Generator</span>
      </a>

      <a href="/outfits">
        <img src="/images/heart.png" alt="Favoriten" />
        <span>Outfits</span>
      </a>
    </nav>
  </aside>

  <main class="content">
    {@render children()}
  </main>
</div>
