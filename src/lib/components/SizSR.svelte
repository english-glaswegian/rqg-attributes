<script>
	import { siz_sr } from '../siz_sr.js';
	export let siz;
	siz = parseInt(siz);
</script>

<div class="ui large label">
	{#if siz_sr(siz) != ''}
		SIZ SR: &nbsp;&nbsp;&nbsp;{siz_sr(siz)}
	{:else}
		SIZ SR:&nbsp;&nbsp; 
	{/if}
</div>
