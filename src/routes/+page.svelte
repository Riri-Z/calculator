<script>
	import ScreenResult from '$lib/ScreenResult.svelte';
	import Button from '$lib/Button.svelte';
	import store from '../stores';

	let resultValue;

	store.subscribe((value) => (resultValue = value));
</script>

<div class="container">
	<body class="containerCalculator">
		<ScreenResult />
		<div class="wrapper">
			<Button doubleSize="true" value={'AC'} />
			<Button value={'DEL'} />
			<Button value={'/'} />
			<Button value={7} numberBtn=true/>
			<Button value={8} numberBtn=true/>
			<Button value={9} numberBtn=true/>
			<Button value={'*'} />
			<Button value={4} numberBtn=true/>
			<Button value={5} numberBtn=true/>
			<Button value={6} numberBtn=true/>
			<Button value={'+'} />
			<Button value={1} numberBtn=true/>
			<Button value={2} numberBtn=true/>
			<Button value={3} numberBtn=true/>
			<Button value={'-'} />
			<Button value={0} doubleSize="true" numberBtn=true/>
			<Button doubleSize="true" value={'='} />
		</div>
	</body>
</div>

<style>

	.container {
    border: 1px solid black;
    margin: 50px;
    width: 50vh;
    border-radius: 10px;
    background: rgb(70, 69, 69);
	}
	.containerCalculator {
		display: flex;
		flex-direction: column;
    padding: 20px;
	}
	.wrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
		grid-auto-rows: minmax(80px, auto);
	}
</style>
