import { render, screen } from '@testing-library/svelte';
import { skillText } from './skillText.js';

it('returns the value of "0%" when passed the integer 0', () => {
  const output = skillText(0)
	expect(output).toEqual('0%');
})
