import { it, expect } from 'vitest';
import { dmg_bonus } from './dmg_bonus.js';


it.each`
	str   | siz   | expected 
	${5}  | ${6}  | ${'-1D4'}
	${7}  | ${6}  | ${'-'}
	${12} | ${13} | ${'+1D4'}
	${16} | ${16} | ${'+1D4'}
	${17} | ${16} | ${'+1D6'}
	${20} | ${20} | ${'+1D6'}
	${28} | ${28} | ${'+2D6'}
	${20} | ${21} | ${'+2D6'}
	${27} | ${30} | ${'+3D6'}
	${36} | ${36} | ${'+3D6'}
	${35} | ${40} | ${'+4D6'}
	${60} | ${51} | ${'+6D6'}
	${65} | ${65} | ${'+7D6'}
	${undefined} | ${25} | ${''}
	${undefined} | ${25} | ${''}
	${undefined} | ${undefined} | ${''}
	`('returns the damage bonus $expected for the STR $str and SIZ $siz',
      ({str, siz, expected }) => {
  const result = dmg_bonus(str, siz);
  expect(result).toBe(expected);
})

