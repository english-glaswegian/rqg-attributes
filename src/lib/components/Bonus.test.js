import { render, screen } from '@testing-library/svelte';
import Bonus from './Bonus.svelte';

it('has title for bonus', () => {
  render(Bonus, { skillCategory: 'AGILITY', str: 20, siz: 17, dex: 13, int: 15, pow: 11, cha: 17 });
  const input = screen.queryByRole('heading', { name: 'AGILITY' });
  expect(input).toBeInTheDocument();
});

it('displays the calculated bonus as expected', () => {
  render(Bonus, { skillCategory: 'AGILITY', str: 20, siz: 17, dex: 13, int: 15, pow: 11, cha: 17 });
  const bns_text = screen.queryByText('+5%');
  expect(bns_text).toBeInTheDocument();
});

it('displays the string "Not Calculated" if stats are missing', () => {
  render(Bonus, { skillCategory: 'MELEE WEAPONS', str: '', siz: 17, dex: 13, int: 15, pow: 11, cha: 17 });
  const bns_text = screen.queryByText('Not Calculated');
  expect(bns_text).toBeInTheDocument();
});
