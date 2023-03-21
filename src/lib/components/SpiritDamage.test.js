import { render, screen } from '@testing-library/svelte';
import SpiritDamage from './SpiritDamage.svelte';

it('displays the expected spirit combat damage', () => {
  render(SpiritDamage, {pow: 13, cha: 17}) ;
	const input = screen.getByText('Spirit Combat Damage: 1D6+1');
	expect(input).toBeInTheDocument();
})

it('displays only the label if POW or CHA is not valid', () => {
  render(SpiritDamage, {pow: '', cha: ''});
	const input = screen.getByText('Spirit Combat Damage:');
	expect(input).toBeInTheDocument();
})
