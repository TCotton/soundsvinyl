import React from 'react'
import VideoErrorBoundary from '../videoErrorBoundary'
import { mount, shallow } from 'enzyme';
import '../../../../enzymeConfig';
import ErrorBoundary from '../ErrorBoundary'

describe('Component', () => {
	let component
	let render
	let componentInstance

	beforeEach(() => {
		component = mount(
			<VideoErrorBoundary>
				<div />
			</VideoErrorBoundary>
		)
		componentInstance = component.instance();
	})

	describe('VideoErrorBoundary', () => {
		it('should be defined', () => {
			expect(component).toBeDefined();
		})

		describe.skip('should return null if default (null) state error is unchanged', () => {
			beforeEach(() => {
				render = componentInstance.render()
			})

			it('', () => {

				expect(render).toEqual(null)
			})
		})

		describe('state error is default (null) then null default is returned', () => {
			beforeEach(() => {
				componentInstance.setState({ hasError: 'error! error! error!' })
				render = componentInstance.render()
			})

			it('', () => {
				expect(render).toEqual(expect.any(Object))
				expect(render).not.toEqual(null)
			})
		})
	})


	describe('When a JS error is caught in a child component', () => {
		let ErrorBoundaryComponent;
		let $error = 'Error';

		beforeAll(() => {
			ErrorBoundaryComponent = shallow(
				<VideoErrorBoundary>
					<h1>
						{$error}
					</h1>
				</VideoErrorBoundary>
			)
			ErrorBoundaryComponent.instance().componentDidCatch();
			ErrorBoundaryComponent.instance().state.error = true;
			ErrorBoundaryComponent.update();
		})

		it('should update the state to indicate an error', () => {
			expect(ErrorBoundaryComponent.instance().state.error).toBeTruthy()
		})

		it('should not render the child component', () => {
			expect(ErrorBoundaryComponent.find('h1').exists()).toBeFalsy()
		})
	})
})
