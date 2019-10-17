import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import PropTypes from 'prop-types'
import './comment.scss'

export default class CommentsForm extends Component {
	static propTypes = {
		comments: PropTypes.arrayOf(
			PropTypes.shape({
				content: PropTypes.string,
				data: PropTypes.string,
				userName: PropTypes.string
			})
		).isRequired,
		commentsMessage: PropTypes.string.isRequired,
		disabled: PropTypes.bool.isRequired,
		onFormSubmit: PropTypes.func.isRequired,
		onInputChange: PropTypes.func.isRequired,
		success: PropTypes.bool.isRequired
	}

	constructor (props) {
		super(props)

		this.handleSubmitLogin = this.handleSubmitLogin.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}

	handleSubmitLogin (event) {
		event.preventDefault()

		const { onFormSubmit } = this.props
		onFormSubmit()
	}

	handleInputChange (event) {
		event.preventDefault()

		const { onInputChange } = this.props
		onInputChange(event)
	}

	render () {
		const { commentsMessage, comments, disabled, success } = this.props
		const $comments = 'Comments'
		const $YouMustBe = 'You must be'
		const $registered = 'registered and logged in'
		const $contribute = 'to contribute a comment'
		const $yourComment =
			`Your comment has been submitted and will appear on` +
			<br /> +
			`this page after it has been approved by the administrator`

		return (
			<React.Fragment>
				<section styleName='commentsForm'>
					<h3>{$comments}</h3>
					{$YouMustBe}
					<p className={disabled ? 'display' : 'hide'}>
						{$YouMustBe}
						<Link to='/my-account'>{$registered}</Link>
						{$contribute}
					</p>

					<p className={success ? 'display' : 'hide'}>{$yourComment}</p>

					<form onSubmit={this.handleSubmitLogin}>
						<textarea
							cols='10'
							id='commentsMessage'
							maxLength='500'
							name='commentsMessage'
							onChange={this.handleInputChange}
							rows='10'
							value={commentsMessage}
						/>

						<input
							disabled={disabled}
							name='submit'
							type='submit'
							value='Comment'
						/>
					</form>
				</section>

				<section
					className={comments.length > 0 ? 'display' : 'hide'}
					styleName='commentsBlock'
				>
					<Comment content={comments} />
				</section>
			</React.Fragment>
		)
	}
}
