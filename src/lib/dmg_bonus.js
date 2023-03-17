export const dmg_bonus = (str, siz) => {
	if (str == undefined || siz == undefined || isNaN(str) || isNaN(siz)) {
		return '';
	}

	str = parseInt(str);
	siz = parseInt(siz);

	const str_siz = str + siz;

	if (str_siz < 13) {
		return '-1D4';
	} else if (str_siz < 25) {
		return '-';
	} else if (str_siz < 33) {
		return '+1D4';
	} else if (str_siz < 41) {
		return '+1D6';
	} else {
		const dice = Math.ceil((str_siz - 40) / 16) + 1;
		if (isNaN(dice)) {
			return '';
		} else {
			return `+${dice}D6`;
		}
	}
};
