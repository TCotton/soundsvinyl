import React from 'react'
import MyAccountForm from '../MyAccountForm'
import renderer from 'react-test-renderer'

describe('Component', () => {
	let component
	beforeEach(() => {
		component = renderer.create(
			<MyAccountForm
				disabled
				formName='loginForm'
				legend='Login'
				name='thisIsAName'
				nameLabel='Your email'
				onFormSubmit={() => {}} // eslint-disable-line
				onInputChange={() => {}} // eslint-disable-line
				password='thisIsAPassword'
				passwordLabel='Your password'
			/>
		)
	})

	describe('MyAccountForm', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(
				<MyAccountForm
					disabled={false}
					formName='anotherForm'
					legend='Another Login'
					name='thisIsAnotherName'
					nameLabel='Another email'
					onFormSubmit={() => {}} // eslint-disable-line
					onInputChange={() => {}} // eslint-disable-line
					password='thisIsAnotherPassword'
					passwordLabel='Another password'
				/>
			)

			expect(component).toBeDefined()
		})
	})
})
