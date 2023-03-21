import { render, screen } from '@testing-library/svelte';
import Bonus from './Bonus.svelte';

it('has title for bonus', () => {
	render(Bonus, { skillCategory: 'AGILITY', str:20, con:11, siz:17, dex:13, int:15,pow:11, cha:17});
	const input = screen.queryByRole('heading', { name: 'AGILITY' });
	expect(input).toBeInTheDocument();
});

it('has displays bonus the bonus as expected', () => {
	render(Bonus, { skillCategory: 'AGILITY',  str: 20, con: 11, siz: 17, dex: 13, int: 15, pow: 11, cha: 17});
	const bns_text = screen.queryByText('+5%');
	expect(bns_text).toBeInTheDocument();
});
