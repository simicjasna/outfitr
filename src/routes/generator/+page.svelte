<script>
  import "./generator.css";

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
  <div class="generator-layout">
    <form method="POST" action="?/generate" class="filter-panel">
      <h2>Filter</h2>

      <div class="filter-group">
        <label for="style">Stil</label>

        <select id="style" name="style">
          <option value="">Stil auswählen</option>

          <option value="Casual" selected={form?.filters?.style === "Casual"}>
            Casual
          </option>

          <option value="Elegant" selected={form?.filters?.style === "Elegant"}>
            Elegant
          </option>

          <option
            value="Sportlich"
            selected={form?.filters?.style === "Sportlich"}
          >
            Sportlich
          </option>
        </select>
      </div>

      <div class="filter-group">
        <label for="color">Farbe optional</label>

        <select id="color" name="color">
          <option value="">Keine Präferenz</option>

          <option value="Schwarz" selected={form?.filters?.color === "Schwarz"}>
            Schwarz
          </option>

          <option value="Weiss" selected={form?.filters?.color === "Weiss"}>
            Weiss
          </option>

          <option value="Beige" selected={form?.filters?.color === "Beige"}>
            Beige
          </option>

          <option value="Blau" selected={form?.filters?.color === "Blau"}>
            Blau
          </option>
        </select>
      </div>

      <button class="primary-button generate-button" type="submit">
        Outfit generieren
      </button>
    </form>

    <div class="result-panel">
      {#if form?.error}
        <div class="message-box error-message">
          <h2>Kein passendes Outfit gefunden</h2>
          <p>{form.message}</p>
        </div>
      {:else if form?.outfit}
        <div class="result-content">
          <h2>Dein Outfit</h2>

          <div class="outfit-result">
            {#each form.outfit.items as item}
              <div class="outfit-card">
                <img src={item.image} alt={item.name} />

                <h3>{item.name}</h3>

                <p>
                  {item.category} • {item.color} • {item.style}
                </p>
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
          <h2>Noch kein Outfit erstellt</h2>

          <p>Wähle einen Stil und generiere ein Outfit.</p>
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
