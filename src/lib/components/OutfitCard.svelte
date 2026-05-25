<script>
  let { outfit, showDelete = true, onDeleted = () => {} } = $props();

  let isFavorite = $state(outfit.isFavorite || false);
  let hidden = $state(false);

  async function toggleFavorite() {
    const formData = new FormData();
    formData.append("id", outfit._id);

    const response = await fetch("?/toggleFavorite", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      isFavorite = !isFavorite;
    }
  }

  async function deleteOutfit() {
    const formData = new FormData();

    formData.append("id", outfit._id);
    formData.append("name", outfit.name);

    const response = await fetch("?/remove", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      hidden = true;
      onDeleted(outfit.name);
    }
  }
</script>

{#if !hidden}
  <div class="outfit-item">
    <div class="outfit-actions">
      <button
        type="button"
        class="heart-button"
        class:empty-heart={!isFavorite}
        title={isFavorite ? "Aus Favoriten entfernen" : "Als Favorit speichern"}
        onclick={toggleFavorite}
      >
        <img
          src={isFavorite
            ? "/images/favorite.png"
            : "/images/favorite-empty.png"}
          alt={isFavorite ? "Favorit" : "Kein Favorit"}
        />
      </button>

      {#if showDelete}
        <button
          type="button"
          class="delete-outfit-button"
          title="Outfit löschen"
          onclick={deleteOutfit}
        >
          <img src="/images/broom.png" alt="Löschen" />
        </button>
      {/if}
    </div>

    <h2>{outfit.name}</h2>

    <p>
      {outfit.style}
      {outfit.color ? ` • ${outfit.color}` : ""}
    </p>

    <div class="outfit-preview">
      {#each outfit.items as item}
        <div class="preview-card">
          <img src={item.image} alt={item.name} />

          <span>
            {item.category}
            {#if item.accessoryType}
              • {item.accessoryType}
            {/if}
          </span>
        </div>
      {/each}
    </div>
  </div>
{/if}
