<script>
	let { feedback } = $props();
</script>

{#if feedback}
	<div
		class:success-message={feedback.type === 'success'}
		class:danger-message={feedback.type === 'danger'}
		class:warning-message={feedback.type === 'warning'}
	>
		{feedback.message}
	</div>
{/if}