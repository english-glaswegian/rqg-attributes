<script>
	import { dex_sr } from '../dex_sr.js';
	export let dex;
	dex = parseInt(dex);
</script>

<div class="ui large label">
	{#if dex_sr(dex) !== ''}
		DEX SR:&nbsp;&nbsp;&nbsp;{dex_sr(dex)}
	{:else}
		DEX SR:&nbsp;&nbsp; 
	{/if}
</div>
