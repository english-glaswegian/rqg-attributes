import { render, screen } from '@testing-library/svelte';
import DamageBonus from './DamageBonus.svelte';

it('displays the expected damage bonus', () => {
  render(DamageBonus, {str: 14, siz: 6}) ;
	const input = screen.getByText('Damage Bonus: -');
	// const input = screen.getByText('Damage Bonus:')
	expect(input).toBeInTheDocument();
})
