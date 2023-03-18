<script>
	import { spirit_dmg } from '../spirit_dmg.js';
	export let pow, cha;
	pow = parseInt(pow);
	cha = parseInt(cha);
</script>

<div class="ui large label">
	{#if spirit_dmg(pow, cha) != ''}
		Spirit Combat Damage:&nbsp;{spirit_dmg(pow, cha)}
	{:else}
		Spirit Combat Damage:&nbsp;
	{/if}
</div>
