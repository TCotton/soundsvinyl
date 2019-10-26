import React from 'react'
import Contact from '../Contact'
import renderer from 'react-test-renderer'
import { mount, shallow } from 'enzyme'
//jest.unmock('axios');
import '../../../../enzymeConfig';
import { homeURI } from '../../../helper_constants';
import mockAxios from 'axios';

describe('Component', () => {
	let component;
	let componentInstance;
	let result;

	describe('Contact', () => {

		beforeEach(() => {
			component = renderer.create(<Contact />)
		})

		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('should render correctly', function(){
			const component = renderer.create(<Contact />);
			const tree = component.toJSON();
			expect(tree).toMatchSnapshot();
		});
	})

	describe('Contact initial default state', () => {

		beforeEach( () => {
			component = mount(
				<Contact />
			);

			componentInstance = component.instance();
			result = componentInstance.state;
		});

		it( 'should be defined', () => {
			expect( component ).toBeDefined()
		})

		it( 'should return string for contactName', () => {
			expect( result.contactName ).toEqual( expect.any( String ) );
		});

		it( 'should return string for contactEmail', () => {
			expect( result.contactEmail ).toEqual( expect.any( String )  );
		});

		it( 'should return string for contactMessage', () => {
			expect( result.contactMessage ).toEqual( expect.any( String ) );
		});

		it( 'should return string for zipcode', () => {
			expect( result.zipcode ).toEqual( expect.any( String ) );
		});

		it( 'should return null for error', () => {
			expect( result.error ).toEqual( null );
		});

		it( 'should return null for message', () => {
			expect( result.message ).toEqual( null );
		});
	});

	describe('Contact form', () => {
		it('Should capture contactName correctly in form[0] onChange and change the state accordingly', function(){

			const component = mount(	<Contact /> );
			const input = component.find('form').at(0).find('input').at(0);

			input.instance().value = 'Andy';
			input.simulate('change');
			expect(component.state().contactName).toEqual('Andy');
		})
	});

	it('Should capture contactEmail correctly in form[0] onChange and change the state accordingly', function(){

		const component = mount(	<Contact /> );
		const input = component.find('form').at(0).find('input').at(1);

		input.instance().value = 'me@andywalpole.me';
		input.simulate('change');
		expect(component.state().contactEmail).toEqual('me@andywalpole.me');
	})

	it('Should capture contactMessage correctly in form[0] onChange and change the state accordingly', function(){

		const component = mount(	<Contact /> );
		const input = component.find('form').at(0).find('textarea').at(0);

		input.instance().value = 'This is a message';
		input.simulate('change');
		expect(component.state().contactMessage).toEqual('This is a message');
	})

	it('Should capture zipcide correctly in form[0] onChange and change the state accordingly', function(){

		const component = mount(	<Contact /> );
		const input = component.find('form').at(0).find('input').at(3);

		input.instance().value = 'RM38NB';
		input.simulate('change');
		expect(component.state().zipcode).toEqual('RM38NB');
	})

	it('Should call method handleSubmit on successful form submission', function(){
		const component = mount(	<Contact /> );
		const mockPreventDefault = jest.fn();
		const mockEvent = {
			preventDefault: mockPreventDefault
		};

		const spy = jest.spyOn(component.instance(), 'handleSubmit');
		component.instance().forceUpdate();

		component.instance().handleSubmit(mockEvent);
		expect(spy).toReturn();
		expect(mockPreventDefault).toHaveBeenCalled();
	})

	describe('When handleSubmit is called', () => {
		let ContactComponent;
		const event = {
			preventDefault: jest.fn()
		}

		mockAxios.post.mockImplementationOnce(() =>
			Promise.resolve({
				data: {
					error: false,
					success: true
				}
			})
		);

		beforeAll(() => {
			ContactComponent = shallow(
				<Contact />
			)
			ContactComponent.instance().state.contactEmail = 'me@andywalpole.me';
			ContactComponent.instance().state.contactName = 'Andy Walpole';
			ContactComponent.instance().state.contactMessage = 'This is a message for you rudie';
			ContactComponent.instance().handleSubmit(event);
			ContactComponent.update();
		})

		it(`should call '${homeURI}/apiV1/sendmail`, () => {
			expect(mockAxios.post).toHaveBeenCalled();
		});
	})
})
