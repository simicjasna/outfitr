<script>
  import "../app.css";
  import { page } from "$app/state";

  let { data, children } = $props();

  const authPages = ["/login", "/register"];
  let isAuthPage = $derived(authPages.includes(page.url.pathname));
</script>

{#if isAuthPage}
  <main class="auth-layout">
    {@render children()}
  </main>
{:else}
  <div class="app">
    <aside class="sidebar">
      <div class="logo">
        <img src="/images/logo.png" alt="Outfitr Logo" />
      </div>

      <nav>
        <a href="/">Home</a>
        <a href="/wardrobe">Wardrobe</a>
        <a href="/generator">Generator</a>
        <a href="/outfits">Outfits</a>
      </nav>

      {#if data.user}
        <div class="user-box">
          <p>{data.user.name}</p>
          <a href="/logout">Logout</a>
        </div>
      {/if}
    </aside>

    <main class="content">
      {@render children()}
    </main>
  </div>
{/if}
