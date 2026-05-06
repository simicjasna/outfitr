<script>
  let { label, name, options = [], value = "", placeholder = "" } = $props();
</script>

<div class="select-field">
  <label for={name}>
    {label}
  </label>

  <select id={name} {name} {value}>
    <option value="">
      {placeholder}
    </option>

    {#each options as option}
      <option value={option}>
        {option}
      </option>
    {/each}
  </select>
</div>
