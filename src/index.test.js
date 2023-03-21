import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import page from './routes/+page.svelte';

describe('home page layout', () => {
	it('Have a heading ', () => {
		render(page);
		const header = screen.queryByRole('heading', { name: 'RQG Attribute Bonus Calculator' });
		expect(header).toBeInTheDocument();
	});

	it('has Strength input', () => {
		render(page);
		const input = screen.getByLabelText('STR')
		expect(input).toBeInTheDocument();
	});

	it('has Constitution input', () => {
		render(page);
		const input = screen.getByLabelText('CON')
		expect(input).toBeInTheDocument();
	});

	it('has Size input', () => {
		render(page);
		const input = screen.getByLabelText('SIZ')
		expect(input).toBeInTheDocument();
	});

	it('has Dexterity input', () => {
		render(page);
		const input = screen.getByLabelText('DEX')
		expect(input).toBeInTheDocument();
	});

	it('has Intelligence input', () => {
		render(page);
		const input = screen.getByLabelText('INT')
		expect(input).toBeInTheDocument();
	});

	it('has Power input', () => {
		render(page);
		const input = screen.getByLabelText('POW')
		expect(input).toBeInTheDocument();
	});

	it('has Charisma input', () => {
		render(page);
		const input = screen.getByLabelText('CHA')
		expect(input).toBeInTheDocument();
	});
});

describe('home page interactions', () => {

it.each`
	stat     | entered      | expected 
	${'STR'} | ${'09abcd'}  | ${'09'}
	${'CON'} | ${'xyz16'}   | ${'16'}
	${'SIZ'} | ${'e1f3gh'}  | ${'13'}
	${'DEX'} | ${'ij6wkl'}  | ${'6'}
	${'INT'} | ${'mno10pqu'}| ${'10'}
	${'POW'} | ${'rst20uv'} | ${'20'}
	${'CHA'} | ${'wx1y3xf'} | ${'13'}
	`('$stat input does not accept non-numeric characters', async ({stat, entered, expected}) => {
		render(page);
		const input = screen.getByLabelText(stat)
    await userEvent.type(input, entered)
    expect(input).toHaveValue(expected);
	});
});
