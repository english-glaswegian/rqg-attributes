import { render, screen } from '@testing-library/svelte';
import LocationPoints from './ChestPoints.svelte';

it('displays the expected chest hit points', () => {
  render(LocationPoints, { con: 13, siz: 10, pow: 13 });
  const input = screen.getByText('Chest HP: 6');
  expect(input).toBeInTheDocument();
})

it('displays only the label if CON, SIZ or POW is not valid', () => {
  render(LocationPoints, { con: '', siz: '', pow: '' });
  const input = screen.getByText('Chest HP:');
  expect(input).toBeInTheDocument();
})

