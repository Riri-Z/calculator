<script>
	import ScreenResult from '$lib/ScreenResult.svelte';
	import Button from '$lib/Button.svelte';
	import store from '../../stores';

	let resultValue;

	store.subscribe((value) => (resultValue = value));
</script>

<div>
	<h1>The calculator</h1>
	<body class="containerCalculator">
		<ScreenResult />
		<div class="wrapper">
			<Button doubleSize="true" value={'AC'} />
			<Button value={'DEL'} />
			<Button value={'/'} />
			<Button value={7} />
			<Button value={8} />
			<Button value={9} />
			<Button value={'*'} />
			<Button value={4} />
			<Button value={5} />
			<Button value={6} />
			<Button value={'+'} />
			<Button value={1} />
			<Button value={2} />
			<Button value={3} />
			<Button value={'-'} />
			<Button value={'.'} />
			<Button value={0} />
			<Button doubleSize="true" value={'='} />
		</div>
	</body>
</div>

<style>
	h1 {
		display: flex;
		justify-content: center;
	}
	.containerCalculator {
		display: flex;
		flex-direction: column;
	}
	.wrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
		grid-auto-rows: minmax(80px, auto);
	}
</style>
