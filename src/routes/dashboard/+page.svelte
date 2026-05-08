<script>
  import "./dashboard.css";

  let { data } = $props();
</script>

<section class="dashboard-page">
  <div class="welcome-line">
    <p>Willkommen zurück</p>
    <span>
      Heute stehen dir {data.stats.possibleCombinations}
      mögliche Outfit-Kombinationen zur Verfügung.
    </span>
  </div>

  <div class="hero-section">
    <div class="hero-text">
      <p class="eyebrow">Outfitr Dashboard</p>

      <h1>Hi, was möchtest du heute tragen?</h1>

      <p class="hero-description">
        Erstelle passende Outfits aus deinem digitalen Kleiderschrank und
        speichere deine Lieblingskombinationen.
      </p>

      <div class="hero-actions">
        <a class="primary-button hero-button" href="/generator">
          Outfit generieren
        </a>

        <a class="secondary-button" href="/wardrobe"> Wardrobe öffnen </a>
      </div>
    </div>

    <div class="hero-card">
      <div class="hero-card-top">
        <img src="/images/logo.png" alt="Outfitr Logo" />

        <div class="style-pill">
          Beliebtester Stil: {data.stats.mostUsedStyle}
        </div>
      </div>

      <div>
        <h2>Dein Style auf einen Blick</h2>

        <p>
          Verwalte Kleidung, kombiniere Looks und finde schneller passende
          Outfits.
        </p>
      </div>

      <div class="hero-mini-stats">
        <div>
          <strong>{data.stats.shirts}</strong>
          <span>Shirts</span>
        </div>

        <div>
          <strong>{data.stats.pants}</strong>
          <span>Hosen</span>
        </div>

        <div>
          <strong>{data.stats.shoes}</strong>
          <span>Schuhe</span>
        </div>
      </div>
    </div>
  </div>

  <div class="quick-actions">
    <a href="/upload" class="quick-card">
      <span>+</span>

      <div>
        <h2>Kleidungsstück hinzufügen</h2>
        <p>Erweitere deinen Kleiderschrank.</p>
      </div>
    </a>

    <a href="/generator" class="quick-card">
      <span>♡</span>

      <div>
        <h2>Outfit erstellen</h2>
        <p>Lass dir eine Kombination generieren.</p>
      </div>
    </a>

    <a href="/outfits" class="quick-card">
      <span>♥</span>

      <div>
        <h2>Gespeicherte Outfits</h2>
        <p>Sieh dir deine Favoriten an.</p>
      </div>
    </a>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <p>Kleidungsstücke</p>
      <h2>{data.stats.clothesCount}</h2>
      <span>in deinem Kleiderschrank</span>
    </div>

    <div class="stat-card">
      <p>Gespeicherte Outfits</p>
      <h2>{data.stats.outfitsCount}</h2>
      <span>Lieblingskombinationen</span>
    </div>

    <div class="stat-card">
      <p>Mögliche Kombinationen</p>
      <h2>{data.stats.possibleCombinations}</h2>
      <span>aus Shirt, Hose und Schuhen</span>
    </div>
  </div>

  <section class="latest-section">
    <div class="section-header">
      <div>
        <p class="eyebrow">Zuletzt gespeichert</p>
        <h2>Deine letzten Outfits</h2>
      </div>

      <a href="/outfits">Alle ansehen</a>
    </div>

    {#if data.latestOutfits.length > 0}
      <div class="latest-grid">
        {#each data.latestOutfits as outfit}
          <div class="latest-card">
            <div class="latest-card-header">
              <div>
                <h3>{outfit.name}</h3>

                <p>
                  {outfit.style}
                  {outfit.color ? ` • ${outfit.color}` : ""}
                </p>
              </div>

              <span class="heart-badge">♥</span>
            </div>

            <div class="latest-preview">
              {#each outfit.items as item}
                <img src={item.image} alt={item.name} />
              {/each}
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <div class="empty-dashboard-state">
        <h3>Noch keine Outfits gespeichert</h3>

        <p>Generiere dein erstes Outfit und speichere es als Favorit.</p>

        <a class="primary-button" href="/generator"> Outfit erstellen </a>
      </div>
    {/if}
  </section>
</section>
