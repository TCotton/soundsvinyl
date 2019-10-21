import React, { Component } from 'react'
import './CategoriesHomepage.scss'
import PropTypes from 'prop-types'
import { Redirect, withRouter, Switch } from 'react-router-dom'

class RedirectComp extends Component {
	static propTypes = {
		search: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
	}

	static defaultProps = {
		search: false
	}

	render () {
		const { search } = this.props

		if (!search) {
			return null
		}

		if (search) {
			return (
				<Switch>
					<Redirect
						push
						to={search}
					/>
				</Switch>
			)
		}
	}
}

export default withRouter(RedirectComp)
