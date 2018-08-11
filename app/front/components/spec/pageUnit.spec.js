import PageUnit from '../pageUnit.js';

describe('Component', () => {

	let component;
	const props = {};
	props.title = '';
	props.thumbnailUrl = '';

	beforeEach(() => {
		component = new PageUnit(props);
	});

	describe('PageUnit', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
