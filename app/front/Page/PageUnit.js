import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ExtendedPropTypes from 'extended-proptypes'
import {
	thumbnailOne,
	thumbnailTwo,
	thumbnailThree,
	thumbnailFour,
	thumbnailFive
} from '../../alternative_default_thumbnails'
import { Link } from 'react-router-dom'
import './pageUnit.scss'

export default class PageUnit extends Component {
	static propTypes = {
		id: ExtendedPropTypes.mongoId.isRequired,
		slug: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired,
		thumbnailUrl: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.func,
		]).isRequired,
		title: PropTypes.string.isRequired
	}

	constructor (props) {
		super(props)

		this.handleOnError = this.handleOnError.bind(this)
	}

	handleOnError (event) {
		const myArray = [
			thumbnailOne,
			thumbnailTwo,
			thumbnailThree,
			thumbnailFour,
			thumbnailFive
		]
		const thumbnailDefault = myArray[Math.floor(Math.random() * myArray.length)]
		const randomNumber = Math.floor(Math.random() * 8) + 1

		event.target.className = `random${randomNumber}`;
		event.target.src = thumbnailDefault;
		event.target.alt = '';
	}

	render () {
		const { slug, id, thumbnailUrl, title, subtitle } = this.props

		return (
			<Link
				styleName='pageUnit'
				to={`/${slug}/${id}`}
			>
				<img
					alt={title}
					onError={this.handleOnError}
					src={thumbnailUrl}
				/>
				<span className='video-title'>
					{title}
				</span>
				<span className='video-subtitle'>
					{subtitle}
				</span>
			</Link>
		)
	}
}
