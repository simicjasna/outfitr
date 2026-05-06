<script>
  import "./outfits.css";
  import FeedbackMessage from "$lib/components/FeedbackMessage.svelte";

  let { data } = $props();
</script>

<section class="outfits-page">
  <h1>Deine gespeicherten Kombinationen</h1>

  <FeedbackMessage feedback={data.feedback} />

  {#if data.outfits.length > 0}
    <div class="outfits-grid">
      {#each data.outfits as outfit}
        <div class="outfit-item">
          <form method="POST" action="?/remove" class="heart-form">
            <input type="hidden" name="id" value={outfit._id} />
            <input type="hidden" name="name" value={outfit.name} />

            <button
              type="submit"
              class="heart-button"
              title="Aus Outfits entfernen"
            >
              <img src="/images/favorite.png" alt="Favorit" />
            </button>
          </form>

          <h2>{outfit.name}</h2>
          <p>{outfit.style} {outfit.color ? `• ${outfit.color}` : ""}</p>

          <div class="outfit-preview">
            {#each outfit.items as item}
              <div class="preview-card">
                <img src={item.image} alt={item.name} />
                <span>{item.category}</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <h2>Noch keine Outfits gespeichert</h2>
      <p>Erstelle zuerst ein Outfit im Generator.</p>
      <a class="primary-button" href="/generator">Outfit erstellen</a>
    </div>
  {/if}
</section>
