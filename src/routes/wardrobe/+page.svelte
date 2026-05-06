<script>
	import './wardrobe.css';

	let { data } = $props();
</script>

<section class="wardrobe-page">
	<header class="wardrobe-header">
		<h1>Dein Kleiderschrank</h1>
	</header>

	<div class="wardrobe-actions">
		<div class="filter-bar">
			<select>
				<option>Kategorie</option>
				<option>Top</option>
				<option>Hose</option>
				<option>Schuhe</option>
			</select>

			<select>
				<option>Farbe</option>
				<option>Schwarz</option>
				<option>Weiss</option>
				<option>Beige</option>
				<option>Blau</option>
			</select>

			<select>
				<option>Stil</option>
				<option>Casual</option>
				<option>Elegant</option>
				<option>Sportlich</option>
			</select>
		</div>

		<a class="primary-button add-button" href="/upload">+ Kleider hinzufügen</a>
	</div>

	{#if data.clothes.length > 0}
		<div class="clothing-grid">
			{#each data.clothes as item}
				<div class="clothing-card">
					<img src={item.image} alt={item.name} />

					<div class="clothing-info">
						<h2>{item.name}</h2>
						<p>{item.category} • {item.color} • {item.style}</p>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="empty-state">
			<h2>Noch keine Kleidungsstücke vorhanden</h2>
			<p>Füge dein erstes Kleidungsstück hinzu.</p>
			<a class="primary-button" href="/upload">Kleidungsstück hinzufügen</a>
		</div>
	{/if}
</section>