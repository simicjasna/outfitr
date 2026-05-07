<script>
  import "./upload.css";

  import SelectField from "$lib/components/SelectField.svelte";

  import { categories, colors, styles } from "$lib/constants/options.js";

  let { form } = $props();

  let fileName = $state("");
  let imagePreview = $state("");

  function hasError(field) {
    return form?.missingFields?.includes(field);
  }

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
  <div class="upload-hero">
    <p class="eyebrow">Upload</p>

    <h1>Neues Kleidungsstück hinzufügen</h1>

    <p>
      Erfasse ein Kleidungsstück mit Bild, Kategorie, Farbe und Stil. Danach
      erscheint es automatisch in deinem Kleiderschrank.
    </p>
  </div>

  <form
    class="item-form"
    method="POST"
    action="?/create"
    enctype="multipart/form-data"
  >
    <div class="form-card">
      <div class="upload-box">
        <label
          for="imageUpload"
          class="upload-label"
          class:error-upload={hasError("image")}
        >
          {#if imagePreview}
            <img src={imagePreview} alt="Bildvorschau" class="preview-image" />

            <p class="success-text">Bild ausgewählt</p>

            <span class="file-name">{fileName}</span>

            <span class="upload-hint">
              Klicke hier, um ein anderes Bild auszuwählen
            </span>
          {:else}
            <img
              src="/images/upload.png"
              alt="Upload Icon"
              class="upload-icon"
            />

            <p>
              Bild hochladen <span class="required">*</span>
            </p>

            <span class="upload-hint"> PNG oder JPG auswählen </span>
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

      <div class="form-fields">
        <p class="required-hint">
          <span>*</span> Pflichtfelder
        </p>

        <label class:error-field={hasError("name")}>
          <span>
            Bezeichnung <span class="required">*</span>
          </span>

          <input
            type="text"
            name="name"
            value={form?.values?.name || ""}
            placeholder="z. B. Schwarzes Shirt"
          />
        </label>

        <SelectField
          label="Kategorie *"
          name="category"
          options={categories}
          value={form?.values?.category || ""}
          placeholder="Kategorie auswählen"
          error={hasError("category")}
        />

        <SelectField
          label="Farbe *"
          name="color"
          options={colors}
          value={form?.values?.color || ""}
          placeholder="Farbe auswählen"
          error={hasError("color")}
        />

        <SelectField
          label="Stil *"
          name="style"
          options={styles}
          value={form?.values?.style || ""}
          placeholder="Stil auswählen"
          error={hasError("style")}
        />

        {#if form?.message}
          <p class="error-message">{form.message}</p>
        {/if}
      </div>
    </div>

    <div class="form-actions">
      <a href="/wardrobe" class="secondary-button"> Abbrechen </a>

      <button type="submit"> Speichern </button>
    </div>
  </form>
</section>
