<script>
  import "../outfits/outfits.css";

  import OutfitCard from "$lib/components/OutfitCard.svelte";

  let { data } = $props();

  let favoriteOutfits = $derived(data.outfits ?? []);
</script>

<section class="outfits-page">
  <div class="outfits-hero">
    <div>
      <p class="eyebrow">Favoriten</p>

      <h1>Deine Lieblings-Outfits</h1>

      <p>
        Hier erscheinen nur Outfits, die du mit dem Herz als Favorit markiert
        hast.
      </p>
    </div>
  </div>

  {#if favoriteOutfits.length === 0}
    <section class="empty-card">
      <div class="empty-icon">♥</div>
      <h2>Noch keine Favoriten</h2>
      <p>
        Gehe zu deinen gespeicherten Outfits und markiere deine Lieblingslooks
        mit dem Herz.
      </p>
      <a class="primary-button" href="/outfits">Zu den Outfits</a>
    </section>
  {:else}
    <section class="outfits-grid">
      {#each favoriteOutfits as outfit}
        <OutfitCard {outfit} showDelete={false} />
      {/each}
    </section>
  {/if}
</section>
