<script>
  import "../app.css";
  import { page } from "$app/state";
  import { onMount } from "svelte";

  let { data, children } = $props();

  let darkMode = $state(false);

  const publicPages = ["/", "/login", "/register"];
  let isPublicPage = $derived(publicPages.includes(page.url.pathname));

  function isActive(path) {
    return page.url.pathname === path;
  }

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      darkMode = true;
      document.documentElement.classList.add("dark");
    }
  });

  function toggleDarkMode() {
    darkMode = !darkMode;

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
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
        <a class:active-nav={isActive("/dashboard")} href="/dashboard">Home</a>
        <a class:active-nav={isActive("/wardrobe")} href="/wardrobe">Wardrobe</a
        >
        <a class:active-nav={isActive("/generator")} href="/generator"
          >Generator</a
        >
        <a class:active-nav={isActive("/outfits")} href="/outfits">Outfits</a>
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
            <a href="/profile">Profil</a>

            <button type="button" onclick={toggleDarkMode}>
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <a href="/logout">Logout</a>
          </div>
        </details>
      </header>

      {@render children()}
    </main>
  </div>
{/if}
