<script>
	export let con;
	con = parseInt(con);
</script>

<div class="ui large blue label">
	{#if con != '' && !isNaN(con)}
    Healing Rate {Math.ceil(con/6)} /week
	{:else}
    Healing Rate - /week
	{/if}
</div>
