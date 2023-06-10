import { it, expect } from 'vitest';
import { skillBonus } from './skillBonus.js';

it('returns the expected skill bonus number', () => {
	const bonus = skillBonus('AGILITY', { str: '20', siz: '17', dex: '13', pow: '11' });
	expect(bonus).toEqual('+5%');
});

it('returns the expected skill bonus number', () => {
	const bonus = skillBonus('COMMUNICATION', { int : '18', cha: '17', pow: '13' });
	expect(bonus).toEqual('+15%');
});

it('returns the expected skill bonus number', () => {
	const bonus = skillBonus('MAGIC', { cha: '17', pow: '13' });
	expect(bonus).toEqual('+10%');
});

it('returns the expected skill bonus number', () => {
	const bonus = skillBonus('KNOWLEDGE', { int: '18', pow : '13' });
	expect(bonus).toEqual('+10%');
});

it('returns the expected skill bonus number', () => {
	const bonus = skillBonus('PERCEPTION', { int: '20', pow : '9' });
	expect(bonus).toEqual('+10%');
});

it('returns the expected skill bonus number', () => {
	const bonus = skillBonus('STEALTH', {  siz: '8', dex: '10', int: '20', pow: '9' });
	expect(bonus).toEqual('+15%');
});

it('returns the expected skill bonus number', () => {
	const bonus = skillBonus('MANIPULATION', { str: '11', int: '20', dex: '10', pow: '9' });
	expect(bonus).toEqual('+10%');
});

it('returns the text "Not Calculated" if a stat is missing', () => {
	const bonus = skillBonus('AGILITY', { str: '', siz: '17', dex: '13', pow: '11' });
	expect(bonus).toEqual('Not Calculated');
});
