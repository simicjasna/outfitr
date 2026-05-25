<script>
  import "../outfits/outfits.css";

  import OutfitCard from "$lib/components/OutfitCard.svelte";

  let { data } = $props();
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

    <a class="primary-button" href="/outfits"> Alle Outfits ansehen </a>
  </div>

  {#if data.outfits.length > 0}
    <div class="outfits-grid">
      {#each data.outfits as outfit}
        <OutfitCard {outfit} />
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <h2>Noch keine Favoriten</h2>

      <p>
        Gehe zu deinen gespeicherten Outfits und markiere deine Lieblingslooks
        mit dem Herz.
      </p>

      <a class="primary-button" href="/outfits"> Zu den Outfits </a>
    </div>
  {/if}
</section>
