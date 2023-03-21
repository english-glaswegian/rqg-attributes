<script>
	import { skillBonus } from '../skillBonus.js';
	import { skillText } from '../skillText.js';

	export let skillCategory, str, siz, dex, int, pow, cha;

</script>

			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">{skillCategory}</h4>
				</div>
				<div class="right floated right aligned eight wide column">
					{#if skillText(parseInt(skillBonus(skillCategory , { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(parseInt(skillBonus(skillCategory, { str, siz, dex, int, pow, cha })))}
						</h4>
					{/if}
				</div>
			</div>
