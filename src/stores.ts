import { writable } from 'svelte/store';
interface Store {
	currentOperand: number;
	previousOperand: number;
	result: string[] | number[];
	operation: string;
}

const store = writable<Store>({
	currentOperand: 0,
	previousOperand: 0,
	result: [0],
	operation: ''
});

export default store;
