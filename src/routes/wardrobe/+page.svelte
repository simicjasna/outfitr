<script>
  import "./wardrobe.css";
  import FeedbackMessage from "$lib/components/FeedbackMessage.svelte";

  import { categories, colors, styles } from "$lib/constants/options.js";

  let { data } = $props();

  function applyFilters(event) {
    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      if (value) {
        params.set(key, value);
      }
    }

    window.location.href = `/wardrobe?${params.toString()}`;
  }
</script>

<section class="wardrobe-page">
  <header class="wardrobe-header">
    <h1>Dein Kleiderschrank</h1>
  </header>

  <FeedbackMessage feedback={data.feedback} />

  <div class="wardrobe-actions">
    <form class="filter-bar" onsubmit={applyFilters}>
      <select name="category" value={data.filters.category}>
        <option value="">Kategorie</option>

        {#each categories as category}
          <option value={category}>{category}</option>
        {/each}
      </select>

      <select name="color" value={data.filters.color}>
        <option value="">Farbe</option>

        {#each colors as color}
          <option value={color}>{color}</option>
        {/each}
      </select>

      <select name="style" value={data.filters.style}>
        <option value="">Stil</option>

        {#each styles as style}
          <option value={style}>{style}</option>
        {/each}
      </select>

      <button class="filter-button" type="submit">Filtern</button>

      <a class="reset-filter" href="/wardrobe">Zurücksetzen</a>
    </form>

    <a class="primary-button add-button" href="/upload">+ Kleider hinzufügen</a>
  </div>

  {#if data.clothes.length > 0}
    <div class="clothing-grid">
      {#each data.clothes as item}
        <div class="clothing-card">
          <form method="POST" action="?/remove" class="remove-form">
            <input type="hidden" name="id" value={item._id} />
            <input type="hidden" name="name" value={item.name} />

            <button type="submit" class="remove-button" title="Ausmisten">
              <img src="/images/broom.png" alt="Ausmisten" />
            </button>
          </form>

          <img class="clothing-image" src={item.image} alt={item.name} />

          <div class="clothing-info">
            <h2>{item.name}</h2>
            <p>{item.category} • {item.color} • {item.style}</p>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <h2>Keine passenden Kleidungsstücke gefunden</h2>
      <p>Ändere die Filter oder füge neue Kleidungsstücke hinzu.</p>
      <a class="primary-button" href="/upload">Kleidungsstück hinzufügen</a>
    </div>
  {/if}
</section>
