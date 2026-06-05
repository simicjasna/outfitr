<script>
  import "./upload.css";

  import SelectField from "$lib/components/SelectField.svelte";

  import {
    categories,
    colors,
    styles,
    accessoryTypes,
  } from "$lib/constants/options.js";

  let { form } = $props();

  let fileName = $state("");
  let imagePreview = $state("");
  let compressedImage = $state("");
  let selectedCategory = $state(form?.values?.category || "");

  function hasError(field) {
    return form?.missingFields?.includes(field);
  }

  function resizeImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();

        img.onload = () => {
          const maxWidth = 700;
          const maxHeight = 700;

          let { width, height } = img;

          if (width > height && width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else if (height >= width && height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          const resizedDataUrl = canvas.toDataURL("image/jpeg", 0.75);
          resolve(resizedDataUrl);
        };

        img.onerror = reject;
        img.src = reader.result;
      };

      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleFileChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    fileName = file.name;

    try {
      const resizedImage = await resizeImage(file);

      imagePreview = resizedImage;
      compressedImage = resizedImage;
    } catch (error) {
      console.error("Error resizing image:", error);
    }
  }
</script>

<section class="upload-page">
  <div class="upload-hero">
    <p class="eyebrow">Upload</p>

    <h1>Neues Kleidungsstück hinzufügen</h1>

    <p>
      Erfasse ein Kleidungsstück oder Accessoire mit Bild, Kategorie, Farbe und
      Stil. Danach erscheint es automatisch in deinem Kleiderschrank.
    </p>
  </div>

  <form
    class="item-form"
    method="POST"
    action="?/create"
    enctype="multipart/form-data"
  >
    <input type="hidden" name="compressedImage" value={compressedImage} />

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

            {#if hasError("image")}
              <span class="upload-error-text"> Bitte wähle ein Bild aus. </span>
            {/if}
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

        <div class:error-field={hasError("category")} class="select-field">
          <label for="category">Kategorie *</label>

          <select id="category" name="category" bind:value={selectedCategory}>
            <option value="">Kategorie auswählen</option>

            {#each categories as category}
              <option value={category}>{category}</option>
            {/each}
          </select>
        </div>

        {#if selectedCategory === "Accessoire"}
          <SelectField
            label="Accessoire Typ *"
            name="accessoryType"
            options={accessoryTypes}
            value={form?.values?.accessoryType || ""}
            placeholder="Typ auswählen"
            error={hasError("accessoryType")}
          />
        {/if}

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
