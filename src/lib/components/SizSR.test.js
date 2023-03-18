import { render, screen } from '@testing-library/svelte';
import SizSR  from './SizSR.svelte';

it('displays the expected SIZ SR', () => {
  render(SizSR, {siz: 6}) ;
	const input = screen.getByText('SIZ SR: 3');
	expect(input).toBeInTheDocument();
})

it('displays only the label if SIZ is not valid', () => {
  render(SizSR, {siz: ''});
	const input = screen.getByText('SIZ SR:');
	expect(input).toBeInTheDocument();
})
