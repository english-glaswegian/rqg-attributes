import { modifier } from './modifier.js';

export function skillBonus(
	skillCategory,
	{ str = '', siz = '', dex = '', int = '', pow = '', cha = '' } = {}
) {
	let skillBonus;

	switch (skillCategory) {
		case 'AGILITY':
			if (
				str == '' ||
				siz == '' ||
				dex == '' ||
				pow == '' ||
				isNaN(str) ||
				isNaN(siz) ||
				isNaN(dex) ||
				isNaN(pow)
			) {
				skillBonus = '';
			} else {
				skillBonus =
					modifier(str, 5, false, true) +
					modifier(siz, 5, false, false) +
					modifier(dex, 5, true, true) +
					modifier(pow, 5, false, true);
			}
			break;
		case 'COMMUNICATION':
			if (
				int == '' ||
				cha == '' ||
				pow == '' ||
				isNaN(int) ||
				isNaN(cha) ||
				isNaN(pow)
			) {
				skillBonus = '';
			} else {
				skillBonus =
					modifier(int, 5, false, true) +
					modifier(cha, 5, true, true) +
					modifier(pow, 5, false, true);
			}
			break;
		case 'MAGIC':
			if (
				cha == '' ||
				pow == '' ||
				isNaN(cha) ||
				isNaN(pow)
			) {
				skillBonus = '';
			} else {
				skillBonus =
					modifier(pow, 5, true, true) +
					modifier(cha, 5, false, true);
			}
			break;
		case 'KNOWLEDGE':
			if (
				cha == '' ||
				int == '' ||
				isNaN(cha) ||
				isNaN(int)
			) {
				skillBonus = '';
			} else {
				skillBonus =
					modifier(pow, 5, false, true) +
					modifier(int, 5, true, true);
			}
			break;
		case 'PERCEPTION':
			if (
				cha == '' ||
				int == '' ||
				isNaN(cha) ||
				isNaN(int)
			) {
				skillBonus = '';
			} else {
				skillBonus =
					modifier(pow, 5, false, true) +
					modifier(int, 5, true, true);
			}
			break;
		case 'STEALTH':
			if (
				int == '' ||
				siz == '' ||
				dex == '' ||
				pow == '' ||
				isNaN(int) ||
				isNaN(siz) ||
				isNaN(dex) ||
				isNaN(pow)
			) {
				skillBonus = '';
			} else {
				skillBonus =
					modifier(int, 5, true, true) +
					modifier(siz, 5, true, false) +
					modifier(dex, 5, true, true) +
					modifier(pow, 5, false, false);
			}
			break;
		default:
			if (
				str == '' ||
				dex == '' ||
				int == '' ||
				pow == '' ||
				isNaN(str) ||
				isNaN(dex) ||
				isNaN(int) ||
				isNaN(pow)
			) {
				skillBonus = '';
			} else {
				skillBonus =
					modifier(str, 5, false, true) +
					modifier(int, 5, true, true) +
					modifier(dex, 5, true, true) +
					modifier(pow, 5, false, true);
			}
			break;
	}
	return skillBonus;
}
