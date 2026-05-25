<script>
  import "../app.css";
  import { page } from "$app/state";
  import { onMount } from "svelte";

  let { data, children } = $props();

  let darkMode = $state(false);
  let dropdownOpen = $state(false);
  let userMenuRef = $state();

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

    function handleClickOutside(event) {
      if (userMenuRef && !userMenuRef.contains(event.target)) {
        dropdownOpen = false;
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
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

    dropdownOpen = false;
  }

  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  function closeDropdown() {
    dropdownOpen = false;
  }
</script>

{#if isPublicPage}
  <div class="public-wrapper">
    <button class="public-theme-toggle" type="button" onclick={toggleDarkMode}>
      <img src={darkMode ? "/images/light.png" : "/images/dark.png"} alt="" />
      <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
    </button>

    <main class="public-layout">
      {@render children()}
    </main>
  </div>
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
        <a class:active-nav={isActive("/favorites")} href="/favorites"
          >Favoriten</a
        >
      </nav>
    </aside>

    <main class="content">
      <header class="top-user-bar">
        <div class="user-menu" bind:this={userMenuRef}>
          <button
            type="button"
            class="user-menu-button"
            onclick={toggleDropdown}
          >
            <img src="/images/user.png" alt="User" />
            <span>{data.user?.name}</span>
            <img
              class="dropdown-arrow-icon"
              src="/images/chevron-down.png"
              alt=""
            />
          </button>

          {#if dropdownOpen}
            <div class="user-dropdown">
              <a href="/profile" onclick={closeDropdown}>Profil</a>

              <button type="button" onclick={toggleDarkMode}>
                <img
                  src={darkMode ? "/images/light.png" : "/images/dark.png"}
                  alt=""
                />
                <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>

              <a href="/logout" onclick={closeDropdown}>Logout</a>
            </div>
          {/if}
        </div>
      </header>

      {@render children()}
    </main>
  </div>
{/if}
