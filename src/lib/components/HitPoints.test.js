import { render, screen } from '@testing-library/svelte';
import HitPoints from './HitPoints.svelte';

it('displays the expected hit points', () => {
  render(HitPoints, {con: 15, siz: 6, pow: 13}) ;
	const input = screen.getByText('Hit Points: 14');
	expect(input).toBeInTheDocument();
})
