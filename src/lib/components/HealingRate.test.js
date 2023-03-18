import { render, screen } from '@testing-library/svelte';
import HealingRate from './HealingRate.svelte';

it.each`
	con   | expected 
	${3}  | ${'Healing Rate 1 /week'}
	${4}  | ${'Healing Rate 1 /week'}
	${5}  | ${'Healing Rate 1 /week'}
	${6}  | ${'Healing Rate 1 /week'}
	${7}  | ${'Healing Rate 2 /week'}
	${8}  | ${'Healing Rate 2 /week'}
	${9}  | ${'Healing Rate 2 /week'}
	${10} | ${'Healing Rate 2 /week'}
	${11} | ${'Healing Rate 2 /week'}
	${12} | ${'Healing Rate 2 /week'}
	${13} | ${'Healing Rate 3 /week'}
	${14} | ${'Healing Rate 3 /week'}
	${15} | ${'Healing Rate 3 /week'}
	${16} | ${'Healing Rate 3 /week'}
	${17} | ${'Healing Rate 3 /week'}
	${18} | ${'Healing Rate 3 /week'}
	${19} | ${'Healing Rate 4 /week'}
	${20} | ${'Healing Rate 4 /week'}
	${21} | ${'Healing Rate 4 /week'}
	${22} | ${'Healing Rate 4 /week'}
	${23} | ${'Healing Rate 4 /week'}
	${24} | ${'Healing Rate 4 /week'}
	${25} | ${'Healing Rate 5 /week'}
`('displays the expected Healing Rate', ({con, expected}) => {
  render(HealingRate, {con}) ;
	const input = screen.getByText(expected);
	expect(input).toBeInTheDocument();
})

it('displays the Healing Rate label without a value', () => {
  render(HealingRate, {con: ''}) ;
	const input = screen.getByText('Healing Rate - /week');
	expect(input).toBeInTheDocument();
})
