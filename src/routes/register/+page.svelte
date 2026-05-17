<script>
  import "../login/auth.css"

  let { form } = $props();
</script>

<section class="auth-page">
  <a class="auth-back" href="/">
    <img src="/images/logo.png" alt="Outfitr Logo" />
    <span>Outfitr</span>
  </a>

  <div class="auth-card">
    <p class="eyebrow">Neuer Account</p>

    <h1>Registrieren</h1>

    <p class="auth-description">
      Erstelle deinen persönlichen Outfitr Account und starte deinen digitalen
      Kleiderschrank.
    </p>

    {#if form?.error}
      <div class="auth-error">
        {form.error}
      </div>
    {/if}

    <form method="POST" class="auth-form">
      <label>
        Name

        <input type="text" name="name" placeholder="Dein Name" required />
      </label>

      <label>
        E-Mail

        <input
          type="email"
          name="email"
          placeholder="email@adresse.com"
          required
        />
      </label>

      <label>
        Passwort

        <input
          type="password"
          name="password"
          placeholder="Mindestens 6 Zeichen"
          required
        />
      </label>

      <button type="submit"> Account erstellen </button>
    </form>

    <p class="auth-switch">
      Bereits registriert?
      <a href="/login">Einloggen</a>
    </p>
  </div>
</section>
