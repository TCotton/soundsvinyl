import React, { Component } from 'react'
import './Pagination.scss'
import PropTypes from 'prop-types'

export default class Pagination extends Component {
	static propTypes = {
		articlesPerPage: PropTypes.number.isRequired,
		current: PropTypes.number.isRequired,
		maximum: PropTypes.number.isRequired,
		onChangePagination: PropTypes.func.isRequired,
		total: PropTypes.number.isRequired
	}

	constructor (props) {
		super(props)

		this.handlePaginationChange = this.handlePaginationChange.bind(this)
	}

	shouldComponentUpdate () {
		return true
	}

	handlePaginationChange (event) {
		const direction = event.target.dataset.direction

		const { onChangePagination } = this.props
		onChangePagination(direction)
	}

	render () {
		const { articlesPerPage, current, total, maximum } = this.props

		// only display if the total is a bigger number than articles per page
		return (
			<React.Fragment>
				{articlesPerPage < total && (
					<div styleName='Pagination'>
						<img
							alt=''
							className='PaginationLeft'
							data-direction='left'
							onClick={this.handlePaginationChange}
							src='/app/assets/images/right.svg'
							styleName={(current === 1) ? 'InActive' : 'Active'}
						/>
						<div styleName='PaginationText'>
							{'Page '}
							{current}
							{' of '}
							{maximum}
						</div>
						<img
							alt=''
							className='PaginationRight'
							data-direction='right'
							onClick={this.handlePaginationChange}
							src='/app/assets/images/right.svg'
							styleName={(current === maximum) ? 'InActive' : 'Active'}
						/>
					</div>
				)}
			</React.Fragment>
		)
	}
}
