import { render } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

import Input from './Input.svelte';

it('does not accept non-numeric characters', async () => {
	// render(Input );
	// const validationAlert = screen.queryByRole('alert');
	// expect(validationAlert).not.toBeInTheDocument();
	const { container } = render(Input, {id: 'STR', var_name: 'strength'});
	const field = container.querySelector('#STR');
  await userEvent.type(field, 'abcd')
	expect(field.value).not.toContain('abcd');
});
