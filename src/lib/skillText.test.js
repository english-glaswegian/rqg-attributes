import { skillText } from './skillText.js';

it.each`
	input | expected 
	${0}  | ${'0%'}
	${''} | ${''}
	${5}  | ${'+5%'}
	${-5} | ${'-5%'}
	${10} | ${'+10%'}
	${-10}| ${'-10%'}
	${15} | ${'+15%'}
	${-15}| ${'-15%'}
	${20} | ${'+20%'}
	${-20}| ${'-20%'}
	${25} | ${'+25%'}
	${-25}| ${'-25%'}
	${30} | ${'+30%'}
	${-30}| ${'-30%'}
`('returns the value of $expected when passed the value $input', ({input, expected}) => {
  const output = skillText(input)
	expect(output).toEqual(expected);
})
