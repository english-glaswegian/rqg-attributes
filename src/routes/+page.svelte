<script>
	import DamageBonus from '../lib/components/DamageBonus.svelte';

	let strength = '';
	let constitution = undefined;
	let size = undefined;
	let dexterity = undefined;
	let intelligence = undefined;
	let power = undefined;
	let charisma = undefined;

	$: strength = strength.replace(/[^0-9]/g, '');
</script>

<div class="ui container">
	<h1 class="ui center aligned header">RQG Attribute Bonus Calculator</h1>
	<div class="ui segment">
		<div class="ui left aligned label">CHARACTERISTICS</div>
		<p />
		<div class="ui form">
			<div class="fields">
				<div class="two wide field">
					<div class="ui labeled input">
						<label class="ui label" for="STR">STR</label>
						<input id="STR" bind:value={strength} />
					</div>
				</div>
				<div class="two wide field">
					<div class="ui labeled input">
						<label class="ui label" for="CON">CON</label>
						<input id="CON" bind:value={constitution} />
					</div>
				</div>
				<div class="two wide field">
					<div class="ui labeled input">
						<label class="ui label" for="SIZ">SIZ</label>
						<input id="SIZ" bind:value={size} />
					</div>
				</div>
				<div class="two wide field">
					<div class="ui labeled input">
						<label class="ui label" for="DEX">DEX</label>
						<input id="DEX" bind:value={dexterity} />
					</div>
				</div>
				<div class="two wide field">
					<div class="ui labeled input">
						<label class="ui label" for="INT">INT</label>
						<input id="INT" bind:value={intelligence} />
					</div>
				</div>
				<div class="two wide field">
					<div class="ui labeled input">
						<label class="ui label" for="POW">POW</label>
						<input id="POW" bind:value={power} />
					</div>
				</div>
				<div class="two wide field">
					<div class="ui labeled input">
						<label class="ui label" for="CHA">CHA</label>
						<input id="CHA" bind:value={charisma} />
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="ui form"> -->
	<!-- 	<div class="fields"> -->
	<!-- 	</div> -->
	<!-- </div> -->
	<DamageBonus str={strength} siz={size} />
</div>
