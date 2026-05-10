<script>
  import "./profile.css";

  let { data, form } = $props();

  const profileValues = form?.values || data.profile;
</script>

<section class="profile-page">
  <div class="profile-hero">
    <div>
      <p class="eyebrow">Account</p>

      <h1>Dein Profil</h1>

      <p>
        Verwalte deine persönlichen Angaben, dein Passwort und
        Verkaufsplattformen für ausgemistete Kleidung.
      </p>
    </div>
  </div>

  <div class="profile-grid">
    <section class="profile-card">
      <div class="card-header">
        <p class="eyebrow">Profil</p>
        <h2>Accountdaten</h2>
      </div>

      {#if form?.type === "profile" && form?.message}
        <p
          class:success-message={form.success}
          class:error-message={!form.success}
        >
          {form.message}
        </p>
      {/if}

      <form method="POST" action="?/updateProfile" class="profile-form">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={profileValues.name}
            placeholder="Dein Name"
          />
        </label>

        <label>
          E-Mail
          <input type="email" value={data.profile.email} disabled />
        </label>

        <div class="divider"></div>

        <div class="card-header small">
          <p class="eyebrow">Resell</p>
          <h2>Verkaufsplattformen</h2>
          <p>
            Hinterlege Plattformen, auf denen du ausgemistete Kleidung später
            verkaufen könntest.
          </p>
        </div>

        <label>
          Vinted Username
          <input
            type="text"
            name="vinted"
            value={profileValues.vinted}
            placeholder="z. B. jasna_style"
          />
        </label>

        <label>
          Ricardo Username
          <input
            type="text"
            name="ricardo"
            value={profileValues.ricardo}
            placeholder="optional"
          />
        </label>

        <label>
          Depop Username
          <input
            type="text"
            name="depop"
            value={profileValues.depop}
            placeholder="optional"
          />
        </label>

        <button type="submit"> Profil speichern </button>
      </form>
    </section>

    <section class="profile-card">
      <div class="card-header">
        <p class="eyebrow">Sicherheit</p>
        <h2>Passwort ändern</h2>
      </div>

      {#if form?.type === "password" && form?.message}
        <p
          class:success-message={form.success}
          class:error-message={!form.success}
        >
          {form.message}
        </p>
      {/if}

      <form method="POST" action="?/changePassword" class="profile-form">
        <label>
          Aktuelles Passwort
          <input
            type="password"
            name="currentPassword"
            placeholder="Aktuelles Passwort"
          />
        </label>

        <label>
          Neues Passwort
          <input
            type="password"
            name="newPassword"
            placeholder="Mindestens 6 Zeichen"
          />
        </label>

        <button type="submit"> Passwort ändern </button>
      </form>

      <div class="divider"></div>

      <div class="stats-box">
        <p class="eyebrow">Statistik</p>

        <div>
          <strong>{data.stats.clothesCount}</strong>
          <span>Kleidungsstücke</span>
        </div>

        <div>
          <strong>{data.stats.outfitsCount}</strong>
          <span>Gespeicherte Outfits</span>
        </div>

        <div>
          <strong>{data.stats.mostUsedStyle}</strong>
          <span>Lieblingsstil</span>
        </div>
      </div>
    </section>
  </div>

  <section class="resell-info">
    <div>
      <p class="eyebrow">Nachhaltigkeit</p>

      <h2>Ausgemistete Kleidung weitergeben</h2>

      <p>
        Wenn du Kleidungsstücke ausmistest, kannst du sie später über
        Plattformen wie Vinted oder Ricardo verkaufen. So bleibt dein
        Kleiderschrank übersichtlich und Kleidung bekommt ein zweites Leben.
      </p>
    </div>
  </section>
</section>
