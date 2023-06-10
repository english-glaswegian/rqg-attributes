export const skillText = (skillPercent) => {
		if (Number.isFinite(skillPercent)) { 
			return new Intl.NumberFormat('en-US', {
				style: 'percent',
				maximumFractionDigits: 0,
				signDisplay: 'exceptZero'
			}).format(String(skillPercent / 100));
			// console.log('Bonus:', skillText)
		} else {
			return skillPercent;
  }
};
