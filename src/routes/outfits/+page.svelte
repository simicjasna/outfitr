<script>
  import "./outfits.css";

  import FeedbackMessage from "$lib/components/FeedbackMessage.svelte";
  import OutfitCard from "$lib/components/OutfitCard.svelte";

  let { data } = $props();
</script>

<section class="outfits-page">
  <h1>Deine gespeicherten Kombinationen</h1>

  <FeedbackMessage feedback={data.feedback} />

  {#if data.outfits.length > 0}
    <div class="outfits-grid">
      {#each data.outfits as outfit}
        <OutfitCard {outfit} />
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <h2>Noch keine Outfits gespeichert</h2>

      <p>Erstelle zuerst ein Outfit im Generator.</p>

      <a class="primary-button" href="/generator"> Outfit erstellen </a>
    </div>
  {/if}
</section>
