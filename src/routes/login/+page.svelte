<script>
  import "./auth.css";

  let { form } = $props();
</script>

<section class="auth-page">
  <a class="auth-back" href="/">
    <img src="/images/logo.png" alt="Outfitr Logo" />
    <span>Outfitr</span>
  </a>

  <div class="auth-card">
    <p class="eyebrow">Willkommen zurück</p>

    <h1>Einloggen</h1>

    <p class="auth-description">
      Melde dich an, um deinen persönlichen Kleiderschrank zu verwenden.
    </p>

    {#if form?.message}
      <div class="auth-error">
        {form.message}
      </div>
    {/if}
    <form method="POST" action="?/login" class="auth-form">
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
          placeholder="Dein Passwort"
          required
        />
      </label>

      <button type="submit"> Einloggen </button>
    </form>

    <p class="auth-switch">
      Noch keinen Account?
      <a href="/register">Account erstellen</a>
    </p>
  </div>
</section>
