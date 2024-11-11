<script>
	import DamageBonus from './DamageBonus.svelte';
	import DexSr from './DexSR.svelte';
	import HealingRate from './HealingRate.svelte';
	import SizSr from './SizSR.svelte';
	import HitPoints from './HitPoints.svelte';
	import MaxEnc from './MaxEnc.svelte';
	import SpiritDamage from './SpiritDamage.svelte';

	export let str, con, siz, dex, pow, cha;
</script>

<div class="ui segment">
	<div class="ui top left attached blue label">ATTRIBUTES</div>
	<div class="doubling stackable six column ui grid container">
		<div class="three wide column">
			<DamageBonus str={parseInt(str)} siz={parseInt(siz)} />
		</div>
		<div class="two wide column">
			<DexSr dex={parseInt(dex)} />
		</div>
		<div class="two wide column">
			<SizSr siz={parseInt(siz)} />
		</div>
		<div class="three wide column">
			<HealingRate con={parseInt(con)} />
		</div>
		<div class="two wide column">
			<HitPoints con={parseInt(con)} siz={parseInt(siz)} pow={parseInt(pow)} />
		</div>
		<div class="three wide column">
			<MaxEnc str={parseInt(str)} con={parseInt(con)} />
		</div>
		<div class="four wide column">
			<SpiritDamage pow={parseInt(pow)} cha={parseInt(cha)} />
		</div>
	</div>
</div>
