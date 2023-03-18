import { it, expect } from 'vitest';
import { max_enc } from './max_enc.js';

it.each`
	str   | con   | expected 
	${7}  | ${9}  | ${7.0}  
	${21} | ${10} | ${15.5}  
	${10} | ${21} | ${10.0}  
	${14} | ${15} | ${14.0}  
	${16} | ${13} | ${14.5}  
	${14} | ${18} | ${14.0}  
	${13} | ${11} | ${12.0}  
	${19} | ${12} | ${15.5}  
	${''} | ${12} | ${''}  
	${12} | ${''} | ${''}  
	${''} | ${''} | ${''}  
	`('returns the max enc value $enc when STR is $str and CON is $con',
      ({str,  con, expected }) => {
  const result = max_enc(str, con);
  expect(result).toBe((expected));
})
