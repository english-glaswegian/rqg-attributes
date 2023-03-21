export const skillText = (skillPercent) => {
		if (skillPercent === '' || isNaN(skillPercent)) {
			return '';
		} else {
			return new Intl.NumberFormat('en-US', {
				style: 'percent',
				maximumFractionDigits: 0,
				signDisplay: 'exceptZero'
			}).format(String(skillPercent / 100));
			// console.log('Bonus:', skillText)
		}
};
