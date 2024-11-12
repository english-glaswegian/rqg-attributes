import { it, expect } from 'vitest';
import { hit_points } from './hit_points.js';
import { location_hp } from './location_points.js';


it.each`
	con   | siz   | pow   | expected 
	${3}  | ${8}  | ${4}  | ${2}
	${5}  | ${4}  | ${4}  | ${2}
	${4}  | ${8}  | ${5}  | ${2}
	${6}  | ${1}  | ${9}  | ${2}
	${6}  | ${8}  | ${4}  | ${2}
	${3}  | ${17} | ${17} | ${2}
	${7}  | ${10} | ${10} | ${3}
	${8}  | ${10} | ${10} | ${3}
	${9}  | ${10} | ${10} | ${3}
	${10} | ${10} | ${10} | ${4}
	${11} | ${10} | ${10} | ${4}
	${12} | ${10} | ${10} | ${4}
	${13} | ${10} | ${10} | ${5}
	${14} | ${10} | ${10} | ${5}
	${15} | ${10} | ${10} | ${5}
	${16} | ${10} | ${10} | ${6}
	${17} | ${10} | ${10} | ${6}
	${18} | ${10} | ${10} | ${6}
	${18} | ${10} | ${10} | ${6}
	${19} | ${10} | ${10} | ${7}
	${20} | ${10} | ${10} | ${7}
	${21} | ${10} | ${10} | ${7}
	${22} | ${10} | ${10} | ${8}
	${23} | ${10} | ${10} | ${8}
	${24} | ${10} | ${10} | ${8}
	`('returns the result $expected for the CON $con, siz $siz and POW $pow',
      ({con, siz, pow, expected }) => {
  const hp = hit_points(con, siz, pow);
  const result = location_hp(hp);
  expect(result).toBe(parseInt(expected));
})

