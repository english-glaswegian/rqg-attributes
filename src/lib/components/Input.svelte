<script>
	export let id = '',
		var_name = '';

	$: var_name = var_name.replace(/[^0-9]/g, '');
</script>

<div class="two wide field">
	<div class="ui labeled input">
		<label class="ui label" for={id}>{id}</label>
		<input id="{id}" bind:value="{var_name}" />
	</div>
</div>
