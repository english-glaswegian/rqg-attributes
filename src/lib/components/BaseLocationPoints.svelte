<script>
	import { location_hp } from '../location_points.js';
	import { hit_points } from '../hit_points.js';
	export let con, siz, pow;
	con = parseInt(con);
	siz = parseInt(siz);
	pow = parseInt(pow);
</script>

<div class="ui large blue label">
	{#if hit_points(con, siz, pow) != '' && !isNaN(hit_points(con, siz, pow))}
		Abdomen/Head/Legs HP:&nbsp;&nbsp;&nbsp;{location_hp(hit_points(con, siz, pow))}
	{:else}
		Abdomen/Head/Legs HP:&nbsp;&nbsp;
	{/if}
</div>
