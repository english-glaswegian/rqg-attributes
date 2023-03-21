import { it, expect } from 'vitest';
import { skillBonus } from './skillBonus.js';

	it('returns the expected skill bonus number', () => {
    const bonus = skillBonus('AGILITY',  {str:'20', siz:'17', dex:'13', pow:'11'})
		expect(bonus).toEqual(5);
	});
