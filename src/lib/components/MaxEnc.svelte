<script>
	import { max_enc } from '../max_enc.js';
	export let str, con;
	str = parseInt(str);
	con = parseInt(con);
</script>

<div class="ui large label">
	{#if max_enc(str, con) != ''}
		Max Enc:&nbsp;{max_enc(str, con)}
	{:else}
		Max Enc:&nbsp;
	{/if}
</div>
