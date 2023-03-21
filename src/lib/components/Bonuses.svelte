<script>
	import Bonus from './Bonus.svelte';
	import { skillBonus } from '../skillBonus.js';
	import { skillText } from '../skillText.js';

	export let str, siz, dex, int, pow, cha;

</script>

<div class="ui segment">
	<div class="ui top left attached blue label">SKILL BONUSES</div>
	<div class="doubling stackable three column ui grid container">
    <div class="column">
      <Bonus skillCategory={'AGILITY'} str={str} siz={siz} dex={dex} int={int} pow={pow} cha={cha} />
		</div>
		<div class="column">
      <Bonus skillCategory={'MAGIC'} str={str} siz={siz} dex={dex} int={int} pow={pow} cha={cha} />
		</div>
		<div class="column">
      <Bonus skillCategory={'MELEE WEAPONS'} str={str} siz={siz} dex={dex} int={int} pow={pow} cha={cha} />
		</div>
		<div class="column">
      <Bonus skillCategory={'COMMUNICATION'} str={str} siz={siz} dex={dex} int={int} pow={pow} cha={cha} />
		</div>
		<div class="column">
      <Bonus skillCategory={'MANIPULATION'} str={str} siz={siz} dex={dex} int={int} pow={pow} cha={cha} />
		</div>
		<div class="column">
      <Bonus skillCategory={'MISSILE WEAPONS'} str={str} siz={siz} dex={dex} int={int} pow={pow} cha={cha} />
		</div>
		<div class="column">
      <Bonus skillCategory={'KNOWLEDGE'} str={str} siz={siz} dex={dex} int={int} pow={pow} cha={cha} />
		</div>
		<div class="column">
      <Bonus skillCategory={'PERCEPTION'} str={str} siz={siz} dex={dex} int={int} pow={pow} cha={cha} />
		</div>
		<div class="column">
      <Bonus skillCategory={'SHIELDS'} str={str} siz={siz} dex={dex} int={int} pow={pow} cha={cha} />
		</div>
		<div class="column">
		</div>
		<div class="column">
      <Bonus skillCategory={'STEALTH'} str={str} siz={siz} dex={dex} int={int} pow={pow} cha={cha} />
		</div>
		<div class="column">
      <Bonus skillCategory={'NATURAL WEAPONS'} str={str} siz={siz} dex={dex} int={int} pow={pow} cha={cha} />
		</div>
	</div>
</div>
