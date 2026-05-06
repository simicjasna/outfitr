<script>
  let { outfit } = $props();
</script>

<div class="outfit-item">
  <form method="POST" action="?/remove" class="heart-form">
    <input type="hidden" name="id" value={outfit._id} />
    <input type="hidden" name="name" value={outfit.name} />

    <button type="submit" class="heart-button" title="Aus Outfits entfernen">
      <img src="/images/favorite.png" alt="Favorit" />
    </button>
  </form>

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
