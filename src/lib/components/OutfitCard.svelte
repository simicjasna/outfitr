<script>
  let { outfit } = $props();

  let removed = $state(false);

  async function toggleFavorite() {
    const formData = new FormData();

    formData.append("id", outfit._id);
    formData.append("name", outfit.name);
    formData.append("outfit", JSON.stringify(outfit));

    if (removed) {
      await fetch("?/restore", {
        method: "POST",
        body: formData,
      });

      removed = false;
    } else {
      await fetch("?/remove", {
        method: "POST",
        body: formData,
      });

      removed = true;
    }
  }
</script>

<div class:removed-card={removed} class="outfit-item">
  <button
    type="button"
    class="heart-button"
    class:empty-heart={removed}
    title={removed ? "Outfit wieder hinzufügen" : "Aus Outfits entfernen"}
    onclick={toggleFavorite}
  >
    <img
      src={removed ? "/images/favorite-empty.png" : "/images/favorite.png"}
      alt={removed ? "Nicht favorisiert" : "Favorit"}
    />
  </button>

  <h2>{outfit.name}</h2>

  <p>
    {outfit.style}
    {outfit.color ? ` • ${outfit.color}` : ""}
  </p>

  <div class="outfit-preview">
    {#each outfit.items as item}
      <div class="preview-card">
        <img src={item.image} alt={item.name} />
        <span>{item.category}</span>
      </div>
    {/each}
  </div>
</div>
