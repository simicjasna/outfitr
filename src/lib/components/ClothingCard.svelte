<script>
	let { item } = $props();
</script>

<div class="clothing-card">
	<form method="POST" action="?/remove" class="remove-form">
		<input type="hidden" name="id" value={item._id} />
		<input type="hidden" name="name" value={item.name} />

		<button type="submit" class="remove-button" title="Ausmisten">
			<img src="/images/broom.png" alt="Ausmisten" />
		</button>
	</form>

	<img
		class="clothing-image"
		src={item.image}
		alt={item.name}
	/>

	<div class="clothing-info">
		<h2>{item.name}</h2>

		<p>
			{item.category}
			•
			{item.color}
			•
			{item.style}
		</p>
	</div>
</div>