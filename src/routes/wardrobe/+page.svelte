<script>
	import './wardrobe.css';
</script>

<section class="wardrobe-page">
	<header class="wardrobe-header">
		<h1>Dein Kleiderschrank</h1>
	</header>

	<div class="wardrobe-actions">
		<div class="filter-bar">
			<select>
				<option>Kategorie</option>
				<option>Tops</option>
				<option>Hosen</option>
				<option>Schuhe</option>
			</select>

			<select>
				<option>Farbe</option>
				<option>Schwarz</option>
				<option>Weiss</option>
				<option>Beige</option>
			</select>

			<select>
				<option>Stil</option>
				<option>Casual</option>
				<option>Elegant</option>
				<option>Sportlich</option>
			</select>
		</div>

		<a class="primary-button add-button" href="/add-item">+ Kleider hinzufügen</a>
	</div>

	<div class="clothing-grid">
		{#each Array(8) as _}
			<div class="clothing-card">
				<div class="image-placeholder">Bild</div>
			</div>
		{/each}
	</div>
</section>