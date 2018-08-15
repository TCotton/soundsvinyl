import Comment from '../comment'

describe('Component', () => {

	let component;
	let props = {};
	props.comment = String;
	props.username = String;

	beforeEach(() => {
		component = new Comment(props);
	});

	describe('Comment', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		});
	});
});
