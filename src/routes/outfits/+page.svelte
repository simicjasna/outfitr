<script>
  import "./outfits.css";

  import OutfitCard from "$lib/components/OutfitCard.svelte";

  let { data } = $props();

  let deletedMessage = $state("");

  function handleDeleted(name) {
    deletedMessage = `${name} wurde gelöscht.`;
  }
</script>

<section class="outfits-page">
  <div class="outfits-hero">
    <div>
      <p class="eyebrow">Outfits</p>

      <h1>Deine gespeicherten Outfits</h1>

      <p>
        Hier findest du alle Outfits, die du mit dem Generator gespeichert hast.
        Mit dem Herz kannst du einzelne Outfits als Favorit markieren.
      </p>
    </div>

    <a class="primary-button" href="/generator"> Neues Outfit erstellen </a>
  </div>

  {#if data.feedback}
    <div class={`feedback-message ${data.feedback.type}`}>
      {data.feedback.message}
    </div>
  {/if}

  {#if deletedMessage}
    <div class="feedback-message danger">
      {deletedMessage}
    </div>
  {/if}

  {#if data.outfits.length > 0}
    <div class="outfits-grid">
      {#each data.outfits as outfit}
        <OutfitCard {outfit} onDeleted={handleDeleted} showDelete={true} />
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <h2>Noch keine Outfits gespeichert</h2>

      <p>
        Generiere zuerst ein Outfit und speichere es. Danach erscheint es hier.
      </p>

      <a class="primary-button" href="/generator"> Outfit generieren </a>
    </div>
  {/if}
</section>
