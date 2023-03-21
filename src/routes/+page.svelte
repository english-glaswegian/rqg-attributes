<script>
	import Attributes from '../lib/components/Attributes.svelte';
import Bonuses from '../lib/components/Bonuses.svelte';

	let strength = '';
	let constitution = '';
	let size = '';
	let dexterity = '';
	let intelligence = '';
	let power = '';
	let charisma = '';

	$: strength = strength.replace(/[^0-9]/g, '');
	$: constitution = constitution.replace(/[^0-9]/g, '');
	$: size = size.replace(/[^0-9]/g, '');
	$: dexterity = dexterity.replace(/[^0-9]/g, '');
	$: intelligence = intelligence.replace(/[^0-9]/g, '');
	$: power = power.replace(/[^0-9]/g, '');
	$: charisma = charisma.replace(/[^0-9]/g, '');
</script>

<div class="ui container">
	<h1 class="ui center aligned header">RQG Attribute Bonus Calculator</h1>
	<div class="ui segment">
		<div class="ui top left attached label">CHARACTERISTICS</div>
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
	<Attributes
		str={strength}
		con={constitution}
		siz={size}
		dex={dexterity}
		pow={power}
		cha={charisma}
	/>
	<Bonuses
		str={strength}
		siz={size}
		dex={dexterity}
    int={intelligence}
		pow={power}
		cha={charisma}
	/>
</div>
