<script>
	import './generator.css';

	let { form } = $props();
</script>

<section class="generator-page">
	<div class="generator-layout">
		<form method="POST" class="filter-panel">
			<h2>Filter</h2>

			<div class="filter-group">
				<label for="occasion">Anlass</label>
				<select id="occasion" name="occasion">
					<option value="">Auswählen</option>
					<option value="casual">Casual</option>
					<option value="business">Business</option>
					<option value="sport">Sport</option>
				</select>
			</div>

			<div class="filter-group">
				<label for="color">Farbe</label>
				<select id="color" name="color">
					<option value="">Auswählen</option>
					<option value="schwarz">Schwarz</option>
					<option value="weiss">Weiss</option>
					<option value="beige">Beige</option>
				</select>
			</div>

			<div class="filter-group">
				<label for="style">Stil</label>
				<select id="style" name="style">
					<option value="">Auswählen</option>
					<option value="elegant">Elegant</option>
					<option value="streetwear">Streetwear</option>
					<option value="basic">Basic</option>
				</select>
			</div>

			<button class="primary-button generate-button" type="submit">
				Outfit generieren
			</button>
		</form>

		<div class="result-panel">
			{#if form?.outfit}
				<div class="outfit-result">
					<div class="outfit-card">{form.outfit.top}</div>
					<div class="outfit-card">{form.outfit.bottom}</div>
					<div class="outfit-card">{form.outfit.shoes}</div>
				</div>
			{:else}
				<div class="empty-state">
					<h2>Noch kein Outfit erstellt</h2>
					<p>Wähle Filter und generiere ein Outfit</p>
				</div>
			{/if}
		</div>
	</div>
</section>