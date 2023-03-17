import { it, expect } from 'vitest';
import { siz_sr } from './siz_sr.js';


it.each`
	siz   | expected 
	${5}  | ${3}
	${6}  | ${3}
	${7}  | ${2}
	${8}  | ${2}
	${9}  | ${2}
	${12} | ${2}
	${13} | ${2}
	${14} | ${2}
	${15} | ${1}
	${16} | ${1}
	${17} | ${1}
	${18} | ${1}
	${19} | ${1}
	${20} | ${1}
	${21} | ${1}
	${22} | ${0}
	${23} | ${0}
	${24} | ${0}
	${25} | ${0}
	${26} | ${0}
	`('returns the SIZ SR $expected for the SIZ $siz',
      ({siz, expected }) => {
  const result = siz_sr(siz);
  expect(result).toBe(expected);
})

