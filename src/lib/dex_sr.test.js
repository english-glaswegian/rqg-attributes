import { it, expect } from 'vitest';
import { dex_sr } from './dex_sr.js';

it.each`
	dex   | expected
	${5}  | ${5}
	${6}  | ${4}
	${8}  | ${4}
	${9}  | ${3}
	${12} | ${3}
	${13} | ${2}
	${14} | ${2}
	${15} | ${2}
	${16} | ${1}
	${17} | ${1}
	${18} | ${1}
	${19} | ${0}
	${20} | ${0}
	${21} | ${0}
	${22} | ${0}
	${23} | ${0}
	${24} | ${0}
	${25} | ${0}
	${26} | ${0}
`('returns the DEX SR $expected for the DEX $dex', ({ dex, expected }) => {
	const result = dex_sr(dex);
	expect(result).toBe(expected);
});
