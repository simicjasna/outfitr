<script>
  import "./edit.css";

  import SelectField from "$lib/components/SelectField.svelte";

  import {
    categories,
    colors,
    styles,
    accessoryTypes,
  } from "$lib/constants/options.js";

  let { data, form } = $props();

  let selectedCategory = $state(data.item.category || "");
</script>

<section class="edit-page">
  <h1>Kleidungsstück bearbeiten</h1>

  <form class="edit-form" method="POST" action="?/update">
    <div class="form-card">
      <div class="image-preview">
        <img src={data.item.image} alt={data.item.name} />
      </div>

      <label>
        Bezeichnung

        <input
          type="text"
          name="name"
          value={data.item.name}
          placeholder="z. B. Schwarzes Shirt"
        />
      </label>

      <div class="select-field">
        <label for="category">Kategorie</label>

        <select id="category" name="category" bind:value={selectedCategory}>
          <option value="">Kategorie auswählen</option>

          {#each categories as category}
            <option value={category}>{category}</option>
          {/each}
        </select>
      </div>

      {#if selectedCategory === "Accessoire"}
        <SelectField
          label="Accessoire Typ"
          name="accessoryType"
          options={accessoryTypes}
          value={data.item.accessoryType || ""}
          placeholder="Typ auswählen"
        />
      {/if}

      <SelectField
        label="Farbe"
        name="color"
        options={colors}
        value={data.item.color}
        placeholder="Farbe auswählen"
      />

      <SelectField
        label="Stil"
        name="style"
        options={styles}
        value={data.item.style}
        placeholder="Stil auswählen"
      />

      {#if form?.message}
        <p class="error-message">{form.message}</p>
      {/if}
    </div>

    <div class="form-actions">
      <a class="secondary-button" href="/wardrobe"> Abbrechen </a>

      <button type="submit"> Änderungen speichern </button>
    </div>
  </form>
</section>
