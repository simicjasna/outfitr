<script>
  import "../app.css";
  import { page } from "$app/state";

  let { data, children } = $props();

  const publicPages = ["/", "/login", "/register"];
  let isPublicPage = $derived(publicPages.includes(page.url.pathname));
</script>

{#if isPublicPage}
  <main class="public-layout">
    {@render children()}
  </main>
{:else}
  <div class="app">
    <aside class="sidebar">
      <a class="logo" href="/dashboard">
        <img src="/images/logo.png" alt="Outfitr Logo" />
      </a>

      <nav>
        <a href="/dashboard">Home</a>
        <a href="/wardrobe">Wardrobe</a>
        <a href="/generator">Generator</a>
        <a href="/outfits">Outfits</a>
      </nav>
    </aside>

    <main class="content">
      <header class="top-user-bar">
        <details class="user-menu">
          <summary class="user-menu-button">
            <img src="/images/user.png" alt="User" />
            <span>{data.user?.name}</span>
            <span class="dropdown-arrow">▾</span>
          </summary>

          <div class="user-dropdown">
            <a href="/logout">Logout</a>
          </div>
        </details>
      </header>

      {@render children()}
    </main>
  </div>
{/if}
