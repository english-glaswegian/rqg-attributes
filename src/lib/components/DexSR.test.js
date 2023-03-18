import { render, screen } from '@testing-library/svelte';
import DexSR  from './DexSR.svelte';

it.each`
	dexterity   | expected 
	${5}        | ${'DEX SR: 5'}
	${6}        | ${'DEX SR: 4'}
	${8}        | ${'DEX SR: 4'}
	${9}  | ${'DEX SR: 3'}
	${12} | ${'DEX SR: 3'}
	${13} | ${'DEX SR: 2'}
	${14} | ${'DEX SR: 2'}
	${15} | ${'DEX SR: 2'}
	${16} | ${'DEX SR: 1'}
	${17} | ${'DEX SR: 1'}
	${18} | ${'DEX SR: 1'}
	${19} | ${'DEX SR: 0'}
	${20} | ${'DEX SR: 0'}
	${21} | ${'DEX SR: 0'}
	${22} | ${'DEX SR: 0'}
	${23} | ${'DEX SR: 0'}
	${24} | ${'DEX SR: 0'}
	${25} | ${'DEX SR: 0'}
	${26} | ${'DEX SR: 0'}
`('displays the expected $expected for DEX of $dexterity', ({dexterity, expected}) => {
  render(DexSR,{dex: dexterity});
	const input = screen.getByText(expected);
	expect(input).toBeInTheDocument();
})

it('displays only the label if DEX is not valid', () => {
  render(DexSR, {dex: ''});
	const input = screen.getByText('DEX SR:');
	expect(input).toBeInTheDocument();
})
