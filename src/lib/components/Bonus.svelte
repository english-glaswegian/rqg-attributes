<script>
	import { skillBonus } from '../skillBonus.js';

	export let skillCategory, str, con, siz, dex, int, pow, cha;

	console.log(str, 'in Bonus component.');
	// let skillPercent = skillBonus(skillCategory, { str, con, siz, dex, int, pow, cha });
	// let skillText;
	// skillPercent = parseInt(skillPercent);

	const skillText = (skillPercent) => {
		if (skillPercent == '' || isNaN(skillPercent)) {
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
</script>

<div class="ui center aligned grid">
	<div class="left floated left aligned eight wide column">
		<h4 class="ui header">{skillCategory}</h4>
	</div>
	<div class="right floated right aligned eight wide column">
		{#if skillText === ''}
			<p>Not Calculated</p>
		{:else}
			<div class="ui large label">
				{skillText(parseInt(skillBonus(skillCategory, { str, con, siz, dex, int, pow, cha })))}
			</div>
		{/if}
	</div>
</div>
