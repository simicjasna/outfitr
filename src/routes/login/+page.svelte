<script>
  import "./login.css";

  let { data, form } = $props();
</script>

<section class="auth-page">
  <div class="auth-card">
    <div class="auth-header">
      <p class="eyebrow">Willkommen zurück</p>
      <h1>Einloggen</h1>
      <p>Melde dich an, um deinen persönlichen Kleiderschrank zu verwenden.</p>
    </div>

    {#if data.registered}
      <p class="auth-success">
        Account für {data.registered} wurde erstellt. Bitte logge dich ein.
      </p>
    {/if}

    <form method="POST" action="?/login" class="auth-form">
      <label>
        E-Mail
        <input
          type="email"
          name="email"
          placeholder="dein@email.ch"
          value={form?.values?.email || ""}
        />
      </label>

      <label>
        Passwort
        <input type="password" name="password" placeholder="Dein Passwort" />
      </label>

      {#if form?.message}
        <p class="auth-error">{form.message}</p>
      {/if}

      <button type="submit"> Einloggen </button>
    </form>

    <p class="auth-switch">
      Noch keinen Account?
      <a href="/register">Account erstellen</a>
    </p>
  </div>
</section>
