import { render, screen } from '@testing-library/svelte';
import MaxEnc from './MaxEnc.svelte';

it('displays the expected maximum encumberance', () => {
  render(MaxEnc, {str: 13, con: 17});
	const input = screen.getByText('Max Enc: 13');
	expect(input).toBeInTheDocument();
})

it('displays only the label if STR or CON is not valid', () => {
  render(MaxEnc, {str: '', con: ''});
	const input = screen.getByText('Max Enc:');
	expect(input).toBeInTheDocument();
})
