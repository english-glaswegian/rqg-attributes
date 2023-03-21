<script>
	// import Bonus from './Bonus.svelte';
	import { skillBonus } from '../skillBonus.js';

	export let str, siz, dex, int, pow, cha;

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
	// let stats = {str, con, siz, dex, int, pow, cha}

	// let agility_mod =
	// 	modifier(str, 5, false, true) +
	// 	modifier(siz, 5, false, false) +
	// 	modifier(dex, 5, true, true) +
	// 	modifier(pow, 5, false, true);
</script>

<div class="ui segment">
	<div class="ui top left attached label">SKILL BONUSES</div>
	<div class="doubling stackable three column ui grid container">
		<div class="column">
			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">AGILITY</h4>
				</div>
				<div class="right floated right aligned eight wide column">
					{#if skillText(parseInt(skillBonus( 'AGILITY', { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(parseInt(skillBonus('AGILITY', { str, siz, dex, int, pow, cha })))}
						</h4>
					{/if}
				</div>
			</div>
			<!-- <Bonus skillCategory={"AGILITY"} {str} {con} {siz} {dex} {int} {pow} {cha} /> -->
		</div>
		<div class="column">
			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">MAGIC</h4>
				</div>
				<div class="right floated right aligned eight wide column">
					{#if skillText(parseInt(skillBonus( 'MAGIC', { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(
								parseInt(skillBonus('MAGIC', { str, siz, dex, int, pow, cha }))
							)}
						</h4>
					{/if}
				</div>
			</div>
		</div>
		<div class="column">
			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">MELEE WEAPONS</h4>
				</div>
				<div class="right floated right aligned eight wide column">
					{#if skillText(parseInt(skillBonus( 'MELEE WEAPONS', { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(
								parseInt(skillBonus('MELEE WEAPONS', { str, siz, dex, int, pow, cha }))
							)}
						</h4>
					{/if}
				</div>
			</div>
		</div>
		<div class="column">
			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">COMMUNICATION</h4>
				</div>
				<div class="right floated right aligned eight wide column">
					{#if skillText(parseInt(skillBonus( 'COMMUNICATION', { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(
								parseInt(skillBonus('COMMUNICATION', { str, siz, dex, int, pow, cha }))
							)}
						</h4>
					{/if}
				</div>
			</div>
		</div>
		<div class="column">
			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">MANIPULATION</h4>
				</div>
				<div class="right floated right aligned eight wide column">
					{#if skillText(parseInt(skillBonus( 'MANIPULATION', { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(
								parseInt(skillBonus('MANIPULATION', { str, siz, dex, int, pow, cha }))
							)}
						</h4>
					{/if}
				</div>
			</div>
		</div>
		<div class="column">
			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">MISSILE WEAPONS</h4>
				</div>
				<div class="right floated right aligned eight wide column">
					{#if skillText(parseInt(skillBonus( 'MISSILE WEAPONS', { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(
								parseInt(skillBonus('MISSILE WEAPONS', { str, siz, dex, int, pow, cha }))
							)}
						</h4>
					{/if}
				</div>
			</div>
		</div>
		<div class="column">
			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">KNOWLEDGE</h4> </div> <div class="right floated right aligned eight wide column">
          {#if skillText(parseInt(skillBonus( 'KNOWLEDGE', { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(
								parseInt(skillBonus('KNOWLEDGE', { str, siz, dex, int, pow, cha }))
							)}
						</h4>
					{/if}
				</div>
			</div>
		</div>
		<div class="column">
			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">PERCEPTION</h4> </div> <div class="right floated right aligned eight wide column">
          {#if skillText(parseInt(skillBonus( 'PERCEPTION', { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(
								parseInt(skillBonus('PERCEPTION', { str, siz, dex, int, pow, cha }))
							)}
						</h4>
					{/if}
				</div>
			</div>
		</div>
		<div class="column">
			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">SHIELDS</h4> </div> <div class="right floated right aligned eight wide column">
          {#if skillText(parseInt(skillBonus( 'SHIELDS', { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(
								parseInt(skillBonus('SHIELDS', { str, siz, dex, int, pow, cha }))
							)}
						</h4>
					{/if}
				</div>
			</div>
		</div>
		<div class="column">
		</div>
		<div class="column">
			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">STEALTH</h4> </div> <div class="right floated right aligned eight wide column">
          {#if skillText(parseInt(skillBonus( 'STEALTH', { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(
								parseInt(skillBonus('STEALTH', { str, siz, dex, int, pow, cha }))
							)}
						</h4>
					{/if}
				</div>
			</div>
		</div>
		<div class="column">
			<div class="ui center aligned grid">
				<div class="left floated left aligned eight wide column">
					<h4 class="ui header">NATURAL WEAPONS</h4> </div> <div class="right floated right aligned eight wide column">
          {#if skillText(parseInt(skillBonus( 'NATURAL WEAPONS', { str, siz, dex, int, pow, cha } ))) === ''}
						<p>Not Calculated</p>
					{:else}
						<h4 class="ui header">
							{skillText(
								parseInt(skillBonus('NATURAL WEAPONS', { str, siz, dex, int, pow, cha }))
							)}
						</h4>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
