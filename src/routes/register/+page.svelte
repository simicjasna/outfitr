<script>
  import "./register.css";

  let { form } = $props();
</script>

<section class="auth-page">
  <div class="auth-card">
    <div class="auth-header">
      <p class="eyebrow">Outfitr Account</p>
      <h1>Account erstellen</h1>
      <p>
        Erstelle deinen persönlichen Account, damit dein Kleiderschrank später
        nur dir gehört.
      </p>
    </div>

    <form method="POST" action="?/register" class="auth-form">
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="z. B. Jasna"
          value={form?.values?.name || ""}
        />
      </label>

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
        <input
          type="password"
          name="password"
          placeholder="Mindestens 6 Zeichen"
        />
      </label>

      {#if form?.message}
        <p class="auth-error">{form.message}</p>
      {/if}

      <button type="submit"> Account erstellen </button>
    </form>

    <p class="auth-switch">
      Du hast schon einen Account?
      <a href="/login">Einloggen</a>
    </p>
  </div>
</section>
