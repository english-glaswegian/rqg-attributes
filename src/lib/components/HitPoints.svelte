<script>
	import { hit_points } from '../hit_points.js';
	export let con, siz, pow;
	con = parseInt(con);
	siz = parseInt(siz);
	pow = parseInt(pow);
</script>

<div class="ui large label">
	{#if hit_points(con, siz, pow) != '' && !isNaN(hit_points(con, siz, pow))}
		Hit Points:&nbsp;{hit_points(con, siz, pow)}
	{:else}
		Hit Points:&nbsp;
	{/if}
</div>
