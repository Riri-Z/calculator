import { writable } from 'svelte/store';

const store = writable({
	currentOperand: 0,
  previousOperand: 0,
	result: [],
	operation: null
});

export default store;
