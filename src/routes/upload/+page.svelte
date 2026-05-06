<script>
  import "./upload.css";

  import SelectField from "$lib/components/SelectField.svelte";

  import { categories, colors, styles } from "$lib/constants/options.js";

  let { form } = $props();

  let fileName = $state("");
  let imagePreview = $state("");

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (!file) {
      fileName = "";
      imagePreview = "";
      return;
    }

    fileName = file.name;

    const reader = new FileReader();

    reader.onload = () => {
      imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }
</script>

<section class="upload-page">
  <h1>Neues Kleidungsstück hinzufügen</h1>

  <form
    class="item-form"
    method="POST"
    action="?/create"
    enctype="multipart/form-data"
  >
    <div class="form-card">
      <div class="upload-box">
        <label for="imageUpload" class="upload-label">
          {#if imagePreview}
            <img src={imagePreview} alt="Bildvorschau" class="preview-image" />
            <p class="success-text">Bild ausgewählt</p>
            <span class="file-name">{fileName}</span>
          {:else}
            <img
              src="/images/upload.png"
              alt="Upload Icon"
              class="upload-icon"
            />
            <p>Bild hochladen</p>
            <span class="upload-hint">PNG oder JPG auswählen</span>
          {/if}
        </label>

        <input
          id="imageUpload"
          type="file"
          name="image"
          accept="image/png, image/jpeg"
          onchange={handleFileChange}
        />
      </div>

      <label>
        Bezeichnung
        <input type="text" name="name" placeholder="z. B. Schwarzes T-Shirt" />
      </label>

      <SelectField
        label="Kategorie"
        name="category"
        options={categories}
        placeholder="Kategorie auswählen"
      />

      <SelectField
        label="Farbe"
        name="color"
        options={colors}
        placeholder="Farbe auswählen"
      />

      <SelectField
        label="Stil"
        name="style"
        options={styles}
        placeholder="Stil auswählen"
      />

      {#if form?.message}
        <p class="error-message">{form.message}</p>
      {/if}
    </div>

    <button type="submit">Speichern</button>
  </form>
</section>
