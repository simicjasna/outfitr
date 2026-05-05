<script>
	import './outfits.css';

	let outfits = Array(8);
</script>

<section class="outfits-page">
	<h1>Deine gespeicherten Kombinationen</h1>

	<div class="outfits-grid">
		{#each outfits as _}
			<div class="outfit-item">
				<div class="outfit-image">
					<span>Bild</span>
				</div>

				<button class="remove-button">Entfernen</button>
			</div>
		{/each}
	</div>
</section>