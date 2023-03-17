import { render, screen } from '@testing-library/svelte';
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
