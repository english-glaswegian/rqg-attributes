<script>
	import { dmg_bonus } from '../dmg_bonus.js';
	export let str, siz;
	str = parseInt(str);
	siz = parseInt(siz);
</script>

<div class="ui large label">
	{#if dmg_bonus(str, siz) != ''}
		Damage Bonus:&nbsp;&nbsp;&nbsp;{dmg_bonus(str, siz)}
	{:else}
		Damage Bonus:
	{/if}
</div>
