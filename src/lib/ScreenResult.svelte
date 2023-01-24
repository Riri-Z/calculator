<script lang="ts">
	import store from '../stores';
</script>

<div class="container">
	{#if $store.operation == null}
		<p class="currentCalcul">
			{$store.currentOperand}
		</p>
	{:else}
		<p class="currentCalcul">
			{$store.result.join(' ')}
		</p>
	{/if}
</div>

<style>
	.container {
		background: whitesmoke;
		display: flex;
		justify-content: center;
		height: 10vh;
		border: 1px solid gray;
		margin-bottom: 10px;
		align-items: center;
	}
	.currentCalcul {
		display: flex;
		justify-content: flex-end;
		color: rgb(9, 15, 20);
	}
</style>
