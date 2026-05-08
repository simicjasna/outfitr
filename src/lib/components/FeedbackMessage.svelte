<script>
  import "./FeedbackMessage.css";

  let { feedback } = $props();
</script>

{#if feedback}
  <div class={`feedback-message ${feedback.type}`}>
    <span>{feedback.message}</span>
  </div>
{/if}
