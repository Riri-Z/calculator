<script>
	import store from '../stores';

</script>

{#if $store.operation == null}
	<p class="currentCalcul">
		{$store.currentOperand}
	</p>
{:else}
	<p class="currentCalcul">
		{$store.result.join(' ')}
	</p>
{/if}

<div class="container">
	<p>{$store.currentOperand}</p>
</div>

<style>
	.container {
		background: whitesmoke;
		display: flex;
		justify-content: center;
		height: 10vh;
	}
	.currentCalcul {
		display: flex;
		justify-content: flex-end;
	}
</style>
