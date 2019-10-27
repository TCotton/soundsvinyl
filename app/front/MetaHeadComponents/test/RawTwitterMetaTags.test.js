import React from 'react'
import RawTwitterMetaTags from '../RawTwitterMetaTags'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import '../../../../enzymeConfig';
import MetaHeader from '../RawMetaTags'

describe('Component', () => {
	let component

	beforeEach(() => {
		component = renderer.create(
			<RawTwitterMetaTags
				description='This is a description'
				title='This is a title'
			/>
		)
	})

	describe('RawTwitterMetaTags', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(
				<RawTwitterMetaTags
					description='This is a different description'
					title='This is a different title'
				/>
			)

			expect(component).toBeDefined()
		})

		it('should call document.querySelector', () => {

			const spyFunc = jest.fn(() => {});

			Object.defineProperty(global.document, 'querySelector', {
				configurable: true,
				enumerable: true,
				value: spyFunc,
				writable: true
			});

			component = shallow(
				<RawTwitterMetaTags
					description='This is a description'
					title='This is a title'
				/>
			)

			component.instance().componentDidMount();
			component.update();
			expect(spyFunc).toHaveBeenCalled();
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

			const spyFunc = jest.fn(() => {});

			Object.defineProperty(global.document, 'querySelector', {
				configurable: true,
				enumerable: true,
				value: spyFunc,
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
		})
	})
})
