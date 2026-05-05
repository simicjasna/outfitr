<script>
  import "./upload.css";
</script>

<section class="upload-page">
  <h1>Neues Kleidungsstück hinzufügen</h1>

  <form class="item-form" method="POST" enctype="multipart/form-data">
    <div class="form-card">
      <div class="upload-box">
        <label for="imageUpload" class="upload-label">
          <img src="/images/upload.png" alt="Upload Icon" />
          <p>Bild hochladen</p>
          <span class="upload-hint">PNG oder JPG auswählen</span>
        </label>

        <input
          id="imageUpload"
          type="file"
          name="image"
          accept="image/png, image/jpeg"
        />
      </div>

      <label>
        Bezeichnung
        <input type="text" name="name" placeholder="z. B. Schwarzes T-Shirt" />
      </label>

      <label>
        Kategorie
        <select name="category">
          <option value="">Kategorie auswählen</option>
          <option value="Top">Top</option>
          <option value="Hose">Hose</option>
          <option value="Schuhe">Schuhe</option>
        </select>
      </label>

      <label>
        Farbe
        <select name="color">
          <option value="">Farbe auswählen</option>
          <option value="Schwarz">Schwarz</option>
          <option value="Weiss">Weiss</option>
          <option value="Beige">Beige</option>
        </select>
      </label>

      <label>
        Stil
        <select name="style">
          <option value="">Stil auswählen</option>
          <option value="Casual">Casual</option>
          <option value="Elegant">Elegant</option>
          <option value="Sportlich">Sportlich</option>
        </select>
      </label>
    </div>

    <button type="submit">Speichern</button>
  </form>
</section>
