import React from 'react'
import MetaHeader from '../RawMetaTags'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import '../../../../enzymeConfig';

describe('Component', () => {
	let component
	let spy
	beforeEach(() => {
		component = renderer.create(<MetaHeader title='This is a title' />)
	})

	describe('MetaHeader', () => {
		it( 'should be defined', () => {
			expect( component ).toBeDefined()
		})

		it( 'can be updated', () => {
			component.update( <MetaHeader title='This is a different title'/> )

			expect( component ).toBeDefined()
		});
	});

	describe('MetaHeader componentDidMount', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(<MetaHeader title='This is a different title' />)

			expect(component).toBeDefined()
		})

		it('should document.querySelector and change document.title', () => {

			Object.defineProperty(global.document, 'title', {
				value: 'title of document',
				writable: true
			});
			const spyFunc = jest.fn(() => {
				return 'link[rel=\'canonical\']';
			});
			const spyAttrFunc = jest.fn(() => {
				return {
					'href': `http://example.com`
				}
			});
			Object.defineProperty(global.document, 'querySelector', {
				configurable: true,
				enumerable: true,
				value: spyFunc,
				writable: true
			});
			Object.defineProperty(global.document.querySelector, 'setAttribute', {
				configurable: true,
				enumerable: true,
				value: spyAttrFunc,
				writable: true
			});

			component = shallow(
				<MetaHeader
					canonical='http://example.com'
					title='This is a title'
				/>
			)

		/*	component.instance().componentDidMount();
			component.instance().componentWillUnmount();*/
			component.instance().componentDidMount();
			component.update();
			expect(spyFunc).toHaveBeenCalled();
			expect(spyAttrFunc).toHaveBeenCalled();
			expect(global.document.querySelector.href).toBeDefined();

		})
	})

	describe('MetaHeader componentWillUnmount', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(<MetaHeader title='This is a different title' />)

			expect(component).toBeDefined()
		})

		it('should document.querySelector and change document.title', () => {

			Object.defineProperty(global.document, 'title', {
				value: 'title of document',
				writable: true
			});
			const spyFunc = jest.fn(() => {
				return 'link[rel=\'canonical\']';
			});
			const spyAttrFunc = jest.fn(() => {
				return {
					'href': `http://example.com`
				}
			});
			Object.defineProperty(global.document, 'querySelector', {
				configurable: true,
				enumerable: true,
				value: spyFunc,
				writable: true
			});
			Object.defineProperty(global.document.querySelector, 'setAttribute', {
				configurable: true,
				enumerable: true,
				value: spyAttrFunc,
				writable: true
			});

			component = shallow(
				<MetaHeader
					canonical='http://example.com'
					title='This is a title'
				/>
			)
			
			component.instance().componentWillUnmount();
			component.update();
			expect(spyFunc).toHaveBeenCalled();
			expect(spyAttrFunc).toHaveBeenCalled();
			expect(global.document.querySelector.href).toBeDefined();

		})
	})

})
