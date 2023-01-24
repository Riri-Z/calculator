<script lang="ts">
	export let value: string | number;
	export let doubleSize = false;
	export let numberBtn: boolean;
	let operators = ['-', '+', '/', '*'];
	import store from '../stores';
	import { get } from 'svelte/store';

	function handleClick(value: string | number) {
		if (typeof value === 'number' || value === '.') return handleValue(value.toString());
		if (value === 'AC') return handleClean;
		if (value === 'DEL') return handleDel;
		if (isOperators(value)) return handleOperator(value);
		if (value === '=') return handleResult();
	}

	const operations:any =  {
		'+': (a: number, b: number) => a + b,
		'-': (a: number, b: number) => a - b,
		'*': (a: number, b: number) => a * b,
		'/': (a: number, b: number) => a / b
	};

	function handleResult() {
		let storeCopy = get(store); /*
		let operation = storeCopy.operation?? '' */
		let result = operations[storeCopy.operation](
			Number(storeCopy.previousOperand),
			Number(storeCopy.currentOperand)
		);
		storeCopy.result = [result];
		return store.set(storeCopy);
	}

	function handleOperator(operator:string) {
		let storeCopy = get(store);
		storeCopy.previousOperand = storeCopy.currentOperand;
		storeCopy.operation = operator;
		storeCopy.currentOperand = 0;
		storeCopy.result.push(operator);
		return store.set(storeCopy);
	}

	function isOperators(e: string) {
		return operators.includes(e);
	}

	function handleClean() {
		store.set({
			currentOperand: 0,
			previousOperand: 0,
			result: [0],
			operation: ''
		});
	}

	function handleDel() {
		let storeCopy = get(store);
		if (storeCopy.currentOperand === 0) {
			return;
		}
		if (get(store).result.length == 1) {
			storeCopy.currentOperand = 0;
			storeCopy.result[0] = storeCopy.currentOperand;
		} else {
			storeCopy.currentOperand = get(store).currentOperand.toString().slice(0, -1);
			storeCopy.result[storeCopy.result - 1] = storeCopy.currentOperand;
		}
		return store.set(storeCopy);
	}

	function removeZeros(number: string) {
		let numbers = number;
		const regex = new RegExp('^0+(?!$)', 'g');
		let cleanedNumbers = numbers.replaceAll(regex, '');

		return +cleanedNumbers;
	}

	function handleValue(value: string) {
		let storeCopy = get(store);
		let lastItem = storeCopy.result[storeCopy.result.length - 1];
		let newResult = storeCopy.currentOperand.toString() + value.toString();
		storeCopy.currentOperand = removeZeros(newResult);
		if (typeof lastItem === 'number' /* ||( value = '.') */) {
			storeCopy.result[storeCopy.result.length - 1] = storeCopy.currentOperand;
		} else {
			storeCopy.result.push(storeCopy.currentOperand);
		}
		return store.set(storeCopy);
	}
</script>

<button
	class={doubleSize
		? value === 'AC' || value == 0
			? value == 0
				? 'BtnAC numberBtn'
				: 'BtnAC extraBtn'
			: 'BtnEqual extraBtn'
		: numberBtn
		? 'numberBtn'
		: 'extraBtn'}
	type="button"
	on:click={handleClick(value)}>{value}</button
>

<style>
	.BtnAC {
		grid-column: 1/3;
	}
	.BtnEqual {
		grid-column: 3 / -1;
	}
	.numberBtn {
		background: orange;
	}
	.extraBtn {
		background: rgb(212, 206, 206);
	}
</style>
