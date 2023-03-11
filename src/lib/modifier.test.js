import { it, expect } from 'vitest';
import { modifier } from './modifier.js';

it.each`
	value  | major     | positive | expected 
	${1}   | ${true}   | ${true}  | ${-10}
	${1}   | ${true}   | ${false} | ${10}
	${1}   | ${false}  | ${true}  | ${-5}
	${1}   | ${false}  | ${false} | ${5}
	${2}   | ${true}   | ${true}  | ${-10}
	${2}   | ${true}   | ${false} | ${10}
	${2}   | ${false}  | ${true}  | ${-5}
	${2}   | ${false}  | ${false} | ${5}
	${3}   | ${true}   | ${true}  | ${-10}
	${3}   | ${true}   | ${false} | ${10}
	${3}   | ${false}  | ${true}  | ${-5}
	${3}   | ${false}  | ${false} | ${5}
	${4}   | ${true}   | ${true}  | ${-10}
	${4}   | ${true}   | ${false} | ${10}
	${4}   | ${false}  | ${true}  | ${-5}
	${4}   | ${false}  | ${false} | ${5}
	${5}   | ${true}   | ${true}  | ${-5}
	${5}   | ${true}   | ${false} | ${5}
	${5}   | ${false}  | ${true}  | ${0}
	${5}   | ${false}  | ${false} | ${0}
	${21}  | ${true}   | ${true}  | ${15}
	`('returns the expect result for the given value', ({value,  major, positive, expected }) => {
  const result = modifier(value, 5, major, positive);
  expect(result).toBe(parseInt(expected));
})
