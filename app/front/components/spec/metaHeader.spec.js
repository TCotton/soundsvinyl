import MetaHeader from '../metaHeader.js';

describe('Component', () => {

	let component;
	const props = {};
	props.title = '';

	beforeEach(() => {
		component = new MetaHeader(props);
	});

	describe('MetaHeader', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
