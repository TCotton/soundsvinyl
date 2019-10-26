import React from 'react'
import Pagination from '../Pagination'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import '../../../../enzymeConfig';
import { homeURI } from '../../../helper_constants'
import Video from '../../Page/Video'

describe('Component', () => {
	let component;
	let componentInstance;
	beforeEach(() => {
		component = renderer.create(
			<Pagination
				articlesPerPage={10}
				current={1}
				maximum={10}
				onChangePagination={() => {}} // eslint-disable-line
				total={10}
			/>
		)
	})

	describe('Pagination', () => {
		it('should be defined', () => {
			expect(component).toBeDefined()
		})

		it('can be updated', () => {
			component.update(
				<Pagination
					articlesPerPage={10}
					current={2}
					maximum={10}
					onChangePagination={() => {}} // eslint-disable-line
					total={10}
				/>
			)

			expect(component).toBeDefined()
		})
	})

	describe('When handleSubmit is called', () => {
		let PaginationComponent;
		const event = {
			target: {
				dataset: {
					direction: 'left'
				}
			}
		}

		const lazyloadStub = jest.fn();

		beforeAll(() => {
			PaginationComponent = shallow(
				<Pagination
					articlesPerPage={10}
					current={1}
					maximum={10}
					onChangePagination={lazyloadStub}
					total={10}
				/>
			)
			PaginationComponent.instance().handlePaginationChange(event);
			PaginationComponent.update();
		})

		it(`should call '${homeURI}/apiV1/sendmail`, () => {
			expect(PaginationComponent.instance().props.onChangePagination).toHaveBeenCalled();
		});
	})
})
