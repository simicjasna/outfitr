<script>
  import "./outfits.css";

  import FeedbackMessage from "$lib/components/FeedbackMessage.svelte";
  import OutfitCard from "$lib/components/OutfitCard.svelte";

  let { data } = $props();
</script>

<section class="outfits-page">
  <div class="outfits-hero">
    <div>
      <p class="eyebrow">Favorites</p>

      <h1>Deine gespeicherten Outfits</h1>

      <p>
        Hier findest du alle Kombinationen, die du gespeichert hast. So kannst
        du deine Lieblingslooks jederzeit wiederverwenden.
      </p>
    </div>

    <a class="primary-button hero-button" href="/generator">
      Neues Outfit erstellen
    </a>
  </div>

  <FeedbackMessage feedback={data.feedback} />

  <div class="outfits-content-header">
    <div>
      <p class="eyebrow">Übersicht</p>

      <h2>
        {data.outfits.length}
        {data.outfits.length === 1 ? "Outfit" : "Outfits"}
      </h2>
    </div>
  </div>

  {#if data.outfits.length > 0}
    <div class="outfits-grid">
      {#each data.outfits as outfit}
        <OutfitCard {outfit} />
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <div class="empty-icon">
        <img src="/images/favorite.png" alt="" />
      </div>

      <h2>Noch keine Outfits gespeichert</h2>

      <p>
        Erstelle zuerst ein Outfit im Generator und speichere es als Favorit.
      </p>

      <a class="primary-button" href="/generator"> Outfit erstellen </a>
    </div>
  {/if}
</section>
