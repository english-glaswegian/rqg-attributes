import { render, screen } from '@testing-library/svelte';
import LocationPoints from './BaseLocationPoints.svelte';

it('displays the expected location hit points', () => {
  render(LocationPoints, { con: 12, siz: 10, pow: 13 });
  const input = screen.getByText('Abdomen/Head/Legs HP: 4');
  expect(input).toBeInTheDocument();
})

it('displays only the label if CON, SIZ or POW is not valid', () => {
  render(LocationPoints, { con: '', siz: '', pow: '' });
  const input = screen.getByText('Abdomen/Head/Legs HP:');
  expect(input).toBeInTheDocument();
})

