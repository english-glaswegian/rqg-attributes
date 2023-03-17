import { it, expect } from 'vitest';
import { hit_points } from './hit_points.js';


it.each`
	con   | siz   | pow   | expected 
	${15} | ${6}  | ${13} | ${14}
	${12} | ${16} | ${12} | ${13}
	${11} | ${12} | ${13} | ${11}
	${10} | ${4}  | ${3}  | ${7}
	${11} | ${8}  | ${6}  | ${10}
	${12} | ${12} | ${9}  | ${12}
	${13} | ${15} | ${13} | ${14}
	${14} | ${19} | ${17} | ${17}
	${15} | ${23} | ${21} | ${20}
	`('returns the result $expected for the CON $con, siz $siz and POW $pow',
      ({con, siz, pow, expected }) => {
  const result = hit_points(con, siz, pow);
  expect(result).toBe(parseInt(expected));
})
