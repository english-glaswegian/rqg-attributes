import { it, expect } from 'vitest';
import { spirit_dmg } from './spirit_dmg.js';


it.each`
	pow   | cha   | expected 
	${5}  | ${6}  | ${'1D3'}
	${7}  | ${6}  | ${'1D6'}
	${12} | ${13} | ${'1D6+1'}
	${16} | ${16} | ${'1D6+1'}
	${17} | ${16} | ${'1D6+3'}
	${20} | ${20} | ${'1D6+3'}
	${28} | ${28} | ${'2D6+3'}
	${20} | ${21} | ${'2D6+3'}
	${28} | ${29} | ${'3D6+4'}
	${36} | ${36} | ${'3D6+4'}
	${37} | ${36} | ${'4D6+5'}
	${44} | ${44} | ${'4D6+5'}
	`('returns the spirit combat damage $expected for the POW $pow and CHA $cha',
      ({pow, cha, expected }) => {
  const result = spirit_dmg(pow, cha);
  expect(result).toBe(expected);
})

