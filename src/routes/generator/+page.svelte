<script>
  import "./generator.css";

  import SelectField from "$lib/components/SelectField.svelte";

  import { colors, styles } from "$lib/constants/options.js";

  let { form } = $props();

  let showNameModal = $state(false);
  let outfitName = $state("");

  function openNameModal() {
    outfitName = form?.outfit?.name || "";
    showNameModal = true;
  }

  function closeNameModal() {
    showNameModal = false;
  }
</script>

<section class="generator-page">
  <div class="generator-hero">
    <div>
      <p class="eyebrow">Generator</p>

      <h1>Outfit erstellen</h1>

      <p>
        Wähle einen Stil und optional eine Farbe. Outfitr sucht dir danach eine
        passende Kombination aus deinem Kleiderschrank.
      </p>
    </div>
  </div>

  <div class="generator-layout">
    <form method="POST" action="?/generate" class="filter-panel">
      <div>
        <p class="eyebrow">Filter</p>
        <h2>Deine Auswahl</h2>
      </div>

      <SelectField
        label="Stil"
        name="style"
        options={styles}
        value={form?.filters?.style}
        placeholder="Stil auswählen"
      />

      <SelectField
        label="Farbe optional"
        name="color"
        options={colors}
        value={form?.filters?.color}
        placeholder="Keine Präferenz"
      />

      <button class="primary-button generate-button" type="submit">
        Outfit generieren
      </button>
    </form>

    <div class="result-panel">
      {#if form?.error}
        <div class="message-box error-message">
          <h2>Kein passendes Outfit gefunden</h2>

          <p>{form.message}</p>

          <a href="/upload" class="secondary-link">
            Kleidungsstück hinzufügen
          </a>
        </div>
      {:else if form?.outfit}
        <div class="result-content">
          <div class="result-header">
            <div>
              <p class="eyebrow">Vorschlag</p>
              <h2>Dein Outfit</h2>
            </div>

            <span class="match-pill">Passend zu deinem Stil</span>
          </div>

          <div class="outfit-result">
            {#each form.outfit.items as item}
              <div class="outfit-card">
                <img src={item.image} alt={item.name} />

                <div>
                  <h3>{item.name}</h3>

                  <p>
                    {item.category}
                    •
                    {item.color}
                    •
                    {item.style}
                  </p>
                </div>
              </div>
            {/each}
          </div>

          <div class="result-actions">
            <form method="POST" action="?/generate">
              <input type="hidden" name="style" value={form.filters.style} />

              <input type="hidden" name="color" value={form.filters.color} />

              <button class="secondary-action-button" type="submit">
                Neues Outfit generieren
              </button>
            </form>

            <button class="save-button" type="button" onclick={openNameModal}>
              <img src="/images/favorite.png" alt="Favorit" />

              Outfit speichern
            </button>
          </div>
        </div>
      {:else}
        <div class="empty-state">
          <div class="empty-icon">
            <img src="/images/favorite.png" alt="" />
          </div>

          <h2>Noch kein Outfit erstellt</h2>

          <p>Wähle links einen Stil aus und starte den Generator.</p>
        </div>
      {/if}
    </div>
  </div>

  {#if showNameModal && form?.outfit}
    <div class="modal-backdrop">
      <div class="modal">
        <h2>Outfit benennen</h2>

        <p>
          Gib deinem Outfit einen Namen, damit du es später einfacher
          wiederfindest.
        </p>

        <form method="POST" action="?/save" class="modal-form">
          <input
            type="hidden"
            name="outfit"
            value={JSON.stringify(form.outfit)}
          />

          <label for="outfitName"> Name </label>

          <input
            id="outfitName"
            name="name"
            type="text"
            bind:value={outfitName}
            placeholder="z. B. Casual Uni Outfit"
            required
          />

          <div class="modal-actions">
            <button
              type="button"
              class="secondary-button"
              onclick={closeNameModal}
            >
              Abbrechen
            </button>

            <button type="submit" class="save-button">
              <img src="/images/favorite.png" alt="Favorit" />

              Speichern
            </button>
          </div>
        </form>
      </div>
    </div>
  {/if}
</section>
