<script>
	import { dmg_bonus } from '../dmg_bonus.js';
	export let str, siz;
	str = parseInt(str);
	siz = parseInt(siz);
</script>

<div class="ui segment">
	<div class="ui label">
		{#if dmg_bonus(str, siz) != ''}
			Damage Bonus: {dmg_bonus(str, siz)}
		{:else}
			Damage Bonus:
		{/if}
	</div>
</div>
