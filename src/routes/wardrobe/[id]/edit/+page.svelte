<script>
  import "./edit.css";

  import SelectField from "$lib/components/SelectField.svelte";

  import { categories, colors, styles } from "$lib/constants/options.js";

  let { data, form } = $props();
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

      <SelectField
        label="Kategorie"
        name="category"
        options={categories}
        value={data.item.category}
        placeholder="Kategorie auswählen"
      />

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
